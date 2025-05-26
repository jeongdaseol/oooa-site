#!/bin/bash

# 이미지가 있는 디렉토리
IMAGE_DIR="images"

# 압축된 이미지를 저장할 디렉토리
COMPRESSED_DIR="compressed_images"

# 압축된 이미지 디렉토리 생성
mkdir -p "$COMPRESSED_DIR"

# 모든 이미지 파일에 대해 반복
for file in "$IMAGE_DIR"/*.{jpg,jpeg,png}; do
    if [ -f "$file" ]; then
        # 파일 이름 추출
        filename=$(basename "$file")
        
        # 압축된 파일 경로
        compressed_file="$COMPRESSED_DIR/$filename"
        
        # 이미지 압축 (최대 너비 1200px, 품질 80%)
        sips -Z 1200 -s format jpeg -s formatOptions 80 "$file" --out "$compressed_file"
        
        echo "Compressed: $filename"
    fi
done

echo "Image compression completed!" 