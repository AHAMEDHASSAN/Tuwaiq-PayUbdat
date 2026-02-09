# دليل تشغيل المشروع باستخدام Docker
# Project Deployment Guide using Docker

هذا الملف يحتوي على كافة الأوامر التي تحتاجها لبناء وتشغيل المشروع باستخدام Docker.
This file contains all the commands you need to build and run the project using Docker.

---

## 1. بناء الصورة (Build the Image)
هذا الأمر يقوم بتجهيز "قالب" المشروع وتثبيت كافة المكتبات اللازمة.
This command prepares the "Image" and installs all necessary dependencies.

```bash
docker build -t tuwaiq-pay-app .
```

---

## 2. تشغيل الحاوية (Run the Container)
هذا الأمر يقوم بتشغيل الموقع فعلياً على جهازك أو السيرفر.
This command starts the website on your local machine or server.

```bash
docker run -p 3000:3000 tuwaiq-pay-app
```
**ملاحظة:** سيعمل الموقع على الرابط: `http://localhost:3000`
**Note:** The app will be available at: `http://localhost:3000`

---

## 3. تشغيل الحاوية في الخلفية (Run in Detached Mode)
لو أردت تشغيل الموقع دون الحاجة لترك نافذة الـ Terminal مفتوحة.
If you want to run the app in the background without keeping the terminal open.

```bash
docker run -d -p 3000:3000 tuwaiq-pay-app
```

---

## 4. إيقاف الحاوية (Stop the Container)
لإيقاف الموقع الذي يعمل في الخلفية.
To stop the application running in the background.

```bash
# لمعرفة رقم الحاوية (To get the Container ID)
docker ps

# لإيقاف الحاوية (To stop it)
docker stop <container_id>
```

---

## 5. عرض السجلات (View Logs)
لمتابعة ما يحدث داخل الموقع أو اكتشاف الأخطاء.
To monitor what's happening or debug issues.

```bash
docker logs -f <container_id>
```

---

## متطلبات التشغيل (Requirements)
*   يجب أن يكون برنامج **Docker Desktop** مثبت على الجهاز.
*   Make sure **Docker Desktop** is installed on your system.
