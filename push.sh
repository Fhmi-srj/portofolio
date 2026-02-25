#!/bin/bash
# push.sh — jalankan di lokal untuk push ke GitHub
# Usage: bash push.sh "pesan commit"

MSG=${1:-"update: $(date '+%Y-%m-%d %H:%M')"}

echo "📦 Staging semua perubahan..."
git add -A

echo "💬 Commit: $MSG"
git commit -m "$MSG"

echo "🚀 Push ke GitHub (branch: main)..."
git push origin main

echo "✅ Push berhasil! Sekarang jalankan pull.sh di cPanel."
