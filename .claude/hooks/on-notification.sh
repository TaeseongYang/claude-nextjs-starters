#!/usr/bin/env bash
# Notification 훅 - 권한 요청 감지
# Claude Code가 사용자 입력을 기다릴 때 실행됨

# UTF-8 인코딩 설정 (한글 깨짐 방지)
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NOTIFY="$SCRIPT_DIR/../slack-notify.sh"

# stdin에서 JSON 읽기
INPUT=$(cat)

# 메시지 추출 (message 필드)
MESSAGE=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    msg = data.get('message', '')
    print(msg)
except:
    print('')
" 2>/dev/null)

if [ -z "$MESSAGE" ]; then
  MESSAGE="Claude Code is waiting for your response."
fi

SLACK_MESSAGE="*Claude Code - Permission Request*\n\n> ${MESSAGE}\n\nPlease check and respond from your mobile device."

bash "$NOTIFY" "permission" "$SLACK_MESSAGE"

exit 0
