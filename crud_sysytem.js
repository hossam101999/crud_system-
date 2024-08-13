const express = require('express'); // استدعاء مكتبة Express
const app = express(); // إنشاء تطبيق Express
const port = 3000; // تحديد البورت اللي هيشتغل عليه السيرفر

app.use(express.json()); // استخدام الـ Middleware لتحليل البيانات من النوع JSON

// Create (إنشاء): إضافة بيانات جديدة
app.post('/items', (req, res) => {
  const newItem = req.body; // الحصول على البيانات الجديدة من الـ request
  // هنا هنضيف الكود اللي بيحفظ البيانات في قاعدة البيانات
  res.status(201).send('Item created');
});

// Read (قراءة): استعراض البيانات الموجودة
app.get('/items', (req, res) => {
  // هنا هنضيف الكود اللي بيجلب البيانات من قاعدة البيانات
  res.send('Here are the items');
});

// Update (تحديث): تعديل البيانات الحالية
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id; // الحصول على الـ ID الخاص بالعنصر اللي عايز تعدله
  const updatedItem = req.body; // الحصول على البيانات الجديدة
  // هنا هنضيف الكود اللي بيعدل البيانات في قاعدة البيانات
  res.send(`Item with id ${itemId} updated`);
});

// Delete (حذف): إزالة البيانات
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id; // الحصول على الـ ID الخاص بالعنصر اللي عايز تحذفه
  // هنا هنضيف الكود اللي بيحذف العنصر من قاعدة البيانات
  res.send(`Item with id ${itemId} deleted`);
});

// تشغيل السيرفر
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
