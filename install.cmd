@echo off
setlocal

set "PS_SCRIPT=%~dp0install.ps1"

echo   Menjalankan installer PowerShell...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%PS_SCRIPT%"

endlocal
