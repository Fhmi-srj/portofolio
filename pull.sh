#!/bin/bash
# pull.sh — jalankan di Terminal cPanel untuk update website
# Usage: bash ~/porto-repo/pull.sh

REPO_DIR="$HOME/porto-repo"
PUBLIC_DIR="$HOME/porto.hello-inv.com"

echo "📥 Pulling dari GitHub..."
cd "$REPO_DIR" || { echo "❌ Folder repo tidak ditemukan. Clone dulu!"; exit 1; }

git fetch origin
git reset --hard origin/main

echo "📂 Copy hasil build ke document root..."
cp -r out/. "$PUBLIC_DIR/"

echo "✅ Website berhasil diupdate!"
echo "🌐 https://porto.hello-inv.com"
