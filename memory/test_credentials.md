# Test Credentials — Birthday App

## Password Gate (for Hà)
- **Field**: password input on the landing screen (`data-testid="password-input"`)
- **Password**: `hayeuanh`
- **Hint shown to user**: "Hãy gõ câu anh nói với em mỗi tối — không dấu, viết liền (vd: \"hayeuanh\")"
- Normalization is applied (lowercase, strip Vietnamese accents, strip spaces), so equivalents like `Hà Yêu Anh`, `HAYEUANH`, `hà yêu anh` all work.

## Notes
- No backend auth, no DB. All other data is static in `/app/frontend/src/mock.js`.
