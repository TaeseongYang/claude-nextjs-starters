#!/usr/bin/env bash
# Claude Code -> Slack 알림 스크립트

# UTF-8 인코딩 설정 (한글 깨짐 방지)
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# .env.local에서 SLACK_WEBHOOK_URL 로드
if [ -f ".env.local" ]; then
  export $(cat .env.local | grep CLAUDE_SLACK_WEBHOOK_URL | xargs)
fi

SLACK_WEBHOOK_URL="${CLAUDE_SLACK_WEBHOOK_URL:-}"

# URL이 없으면 조용히 종료
if [ -z "$SLACK_WEBHOOK_URL" ]; then
  exit 0
fi

EVENT_TYPE="${1:-unknown}"
MESSAGE="${2:-알림}"
HOSTNAME=$(hostname 2>/dev/null || echo "Unknown")
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S" 2>/dev/null || echo "")

# 환경 변수 설정 (Python에서 접근)
export EVENT_TYPE
export MESSAGE
export HOSTNAME
export TIMESTAMP

# Python을 사용한 JSON 생성 및 전송 (한글 인코딩 보장)
python3 << 'PYTHON_EOF'
import json
import subprocess
import os

event_type = os.environ.get('EVENT_TYPE', 'unknown')
message = os.environ.get('MESSAGE', '알림')
hostname = os.environ.get('HOSTNAME', 'Unknown')
timestamp = os.environ.get('TIMESTAMP', '')
webhook_url = os.environ.get('SLACK_WEBHOOK_URL', '')

emoji_map = {
    'permission': ('⚠️', '#FF9800', 'Claude Code - Permission Request'),
    'stop': ('✅', '#4CAF50', 'Claude Code - Task Completed'),
}

emoji, color, title = emoji_map.get(event_type, ('🔔', '#2196F3', 'Claude Code 알림'))

payload = {
    'attachments': [
        {
            'color': color,
            'blocks': [
                {
                    'type': 'header',
                    'text': {
                        'type': 'plain_text',
                        'text': f'{emoji} {title}',
                        'emoji': True
                    }
                },
                {
                    'type': 'section',
                    'text': {
                        'type': 'mrkdwn',
                        'text': message
                    }
                },
                {
                    'type': 'context',
                    'elements': [
                        {
                            'type': 'mrkdwn',
                            'text': f':computer: *{hostname}* | :clock1: {timestamp}'
                        }
                    ]
                }
            ]
        }
    ]
}

payload_json = json.dumps(payload, ensure_ascii=False, indent=2)

try:
    subprocess.run(
        ['curl', '-s', '-X', 'POST',
         '-H', 'Content-Type: application/json; charset=utf-8',
         '--data-raw', payload_json,
         webhook_url],
        capture_output=True,
        env={**os.environ, 'LANG': 'en_US.UTF-8', 'LC_ALL': 'en_US.UTF-8'}
    )
except Exception as e:
    pass
PYTHON_EOF

exit 0
