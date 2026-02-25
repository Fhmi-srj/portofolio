#!/bin/bash
# pull.sh — jalankan di Terminal cPanel untuk update website
# Usage: bash pull.sh

REPO_DIR="/home/jasaedi1/porto-repo"
PUBLIC_DIR="/home/jasaedi1/porto.hello-inv.com"

echo "📥 Pulling dari GitHub..."
cd "$REPO_DIR" || { echo "❌ Folder repo tidak ditemukan: $REPO_DIR"; exit 1; }

git fetch origin
git reset --hard origin/main

echo "📂 Copy file ke document root..."
cp -r . "$PUBLIC_DIR/"

echo "✅ Website berhasil diupdate!"
echo "🌐 https://porto.hello-inv.com"
