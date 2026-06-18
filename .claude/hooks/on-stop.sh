#!/usr/bin/env bash
# Stop 훅 - 작업 완료 시 슬랙 알림
# Claude Code가 응답을 완료하고 대기 상태로 돌아올 때 실행됨

# UTF-8 인코딩 설정 (한글 깨짐 방지)
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NOTIFY="$SCRIPT_DIR/../slack-notify.sh"

# stdin에서 JSON 읽기
INPUT=$(cat)

# stop_hook_active가 true면 루프 방지를 위해 종료
STOP_ACTIVE=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    print('true' if data.get('stop_hook_active') else 'false')
except:
    print('false')
" 2>/dev/null)

if [ "$STOP_ACTIVE" = "true" ]; then
  exit 0
fi

SLACK_MESSAGE="Claude Code task has been completed. Please check the results."

bash "$NOTIFY" "stop" "$SLACK_MESSAGE"

exit 0
