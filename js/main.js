// إضافة تفاعل لنموذج الاتصال
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typing-effect");
    const text = "Hi, I'm [Ahmed Islam Ahmed]"; // النص الذي يتم كتابته
    const typingSpeed = 100; // سرعة الكتابة (بالملي ثانية)
    const pauseBetweenLoops = 1000; // الوقت الذي يتوقف فيه قبل البدء في كتابة النص مرة أخرى (بالملي ثانية)
    let index = 0;

    function type() {
        textElement.textContent = ""; // إعادة تعيين النص في كل مرة يبدأ الكتابة
        index = 0;
        
        function innerType() {
            if (index < text.length) {
                textElement.textContent += text[index];
                index++;
                setTimeout(innerType, typingSpeed); // استدعاء الدالة بشكل متكرر
            }
        }

        innerType();
    }

    setInterval(type, text.length * typingSpeed + pauseBetweenLoops); // تكرار الكتابة بعد فترة توقف
    type(); // بدء الكتابة
});

