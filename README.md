# Wasita Tan Portfolio

เว็บ Portfolio ส่วนตัวของ Wasita Tanawattananon พัฒนาด้วย Next.js, React, TypeScript และ Tailwind CSS รองรับสองภาษา ได้แก่ English และ Thai พร้อมหน้าแสดงผลงาน ประสบการณ์ และฟอร์มติดต่อที่ส่งอีเมลผ่าน Resend

## Features

- หน้า Portfolio แบบ single page ประกอบด้วย Hero, About, Projects, Experience และ Contact
- รองรับหลายภาษาด้วย `next-intl` (`en` และ `th`)
- UI แบบ dark theme พร้อม animation จาก `framer-motion`
- ฟอร์มติดต่อพร้อม validation ด้วย `react-hook-form` และ `zod`
- ส่งอีเมลจากฟอร์มผ่าน Resend
- ใช้ Tailwind CSS และ component primitives จาก shadcn/Base UI

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- Framer Motion
- React Hook Form + Zod
- Resend

## Project Structure

```text
.
├── messages/              # ไฟล์ข้อความแปลภาษา en/th
├── public/                # รูปภาพและ static assets
├── src/
│   ├── app/[locale]/      # App Router ตาม locale
│   ├── components/        # Section และ UI components
│   ├── i18n/              # Routing และ navigation สำหรับ next-intl
│   └── lib/               # Utilities, schemas, email action
├── middleware.ts          # Locale middleware
├── next.config.ts         # Next.js config + next-intl plugin
└── package.json
```

## Getting Started

ติดตั้ง dependencies:

```bash
pnpm install
```

สร้างไฟล์ `.env.local` สำหรับฟอร์มติดต่อ:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_TO_EMAIL=your_email@example.com
```

รัน development server:

```bash
pnpm dev
```

เปิดเว็บที่ [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

- `pnpm dev` รันโปรเจกต์ในโหมด development
- `pnpm build` build โปรเจกต์สำหรับ production
- `pnpm start` รัน production server หลัง build
- `pnpm lint` ตรวจ lint ด้วย ESLint

## Internationalization

โปรเจกต์นี้ใช้ `next-intl` โดยกำหนด locale ใน `src/i18n/routing.ts`

- Default locale: `en`
- Supported locales: `en`, `th`
- ไฟล์ข้อความอยู่ใน `messages/en.json` และ `messages/th.json`

เมื่อต้องการแก้ข้อความบนเว็บ ให้แก้ในไฟล์ translation ของภาษานั้น ๆ

## Contact Form

ฟอร์มติดต่ออยู่ที่ `src/components/Contact.tsx` และเรียก server action ใน `src/lib/email.ts`

ต้องตั้งค่า environment variables ต่อไปนี้ก่อนใช้งานจริง:

- `RESEND_API_KEY`
- `RESEND_TO_EMAIL`

หมายเหตุ: ค่า `from` ปัจจุบันใช้ `onboarding@resend.dev` หาก deploy ใช้งานจริง ควรเปลี่ยนเป็นโดเมนที่ verify กับ Resend แล้ว

## Deployment

สามารถ deploy บน Vercel หรือแพลตฟอร์มที่รองรับ Next.js ได้ โดยต้องตั้งค่า environment variables ใน production ให้ครบ:

- `RESEND_API_KEY`
- `RESEND_TO_EMAIL`

ก่อน deploy แนะนำให้ตรวจสอบด้วย:

```bash
pnpm lint
pnpm build
```
