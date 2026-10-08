/* =====================================================================
   course.js: כל התוכן של הקורס נמצא כאן.
   כדי להוסיף תרגול: מוסיפים אובייקט לרשימה practices של הפרק.
   כדי להוסיף פרק: מוסיפים אובייקט לרשימה chapters.

   שדות של תרגול:
     id        מזהה ייחודי. הקישור לתרגול הוא practice.html?id=<id>
     kind      "lesson" = תרגול בהקניה (זהה לשקף), "self" = תרגול עצמי אחרי ההקניה
     title     כותרת
     intro     שורת הסבר (לא חובה)
     questions רשימת שאלות. בכל שאלה:
        q         נוסח השאלה. קוד כותבים בין גרשיים הפוכים: `WHERE ...`
        answer    התשובה הנכונה: מספר שורות או ערך (מספר או טקסט)
        unit      מה התלמיד מקליד, למשל "שורות" (לא חובה)
        hint      רמז (לא חובה)
        solution  שאילתת הפתרון
        note      הסבר שמופיע עם הפתרון (לא חובה)

   שדות של פרק:
     n, title, slides (קישור הטמעה של Google Slides, לא חובה), practices
   ===================================================================== */

window.COURSE = {
  title: "SQL עם FoodRush",
  subtitle: "קורס SQL Server: ממסד נתונים ועד תתי־שאילתות",
  setupPage: "setup.html",

  chapters: [
    { n: 1,  title: "פתיחה, מסד נתונים וסביבת עבודה", slides: "", practices: [] },
    { n: 2,  title: "SELECT ו־FROM", slides: "", practices: [] },
    { n: 3,  title: "עמודות מחושבות וכינויים", slides: "", practices: [] },
    { n: 4,  title: "DISTINCT", slides: "", practices: [] },
    { n: 5,  title: "WHERE", slides: "", practices: [] },
    { n: 6,  title: "כמה תנאים ביחד: AND, OR, NOT", slides: "", practices: [] },

    { n: 7, title: "קיצורי דרך: IN, BETWEEN, LIKE", slides: "",
      practices: [
        { id: "7-1", kind: "lesson", title: "נתרגל: IN, BETWEEN, LIKE",
          intro: "לכל בקשה כלי אחד מהפרק: IN, BETWEEN או LIKE, לפעמים עם NOT. כתבו את השאילתה ב־SSMS והקלידו כאן כמה שורות קיבלתם.",
          questions: [
            { q: "הכספים: \"כמה הזמנות שולמו ב־Bit (`payment_method_id = 2`) או ב־Apple Pay (`payment_method_id = 4`)?\"",
              answer: 498, unit: "שורות", hint: "רשימה של שני ערכים בעמודה אחת.",
              solution: "SELECT *\nFROM orders\nWHERE payment_method_id IN (2, 4)" },
            { q: "השיווק: \"אילו מסעדות הן איטלקיות (`cuisine_id = 2`) או יפניות (`cuisine_id = 3`)?\"",
              answer: 7, unit: "שורות",
              solution: "SELECT *\nFROM restaurants\nWHERE cuisine_id IN (2, 3)" },
            { q: "הכספים: \"בכמה הזמנות לא השתמשו באחד מקופוני הקיץ (`coupon_id` 2 או 3)?\"",
              answer: 240, unit: "שורות", hint: "NOT IN. ואחרי שתקבלו תשובה: האם היא כוללת הזמנות בלי קופון בכלל?",
              solution: "SELECT *\nFROM orders\nWHERE coupon_id NOT IN (2, 3)",
              note: "240 לא כולל 991 הזמנות שבהן coupon_id ריק. כדי לכלול אותן מוסיפים OR coupon_id IS NULL ומקבלים 1231." },
            { q: "מנהלת התפעול: \"כמה משלוחים לקחו בין 30 ל־45 דקות?\"",
              answer: 558, unit: "שורות",
              solution: "SELECT *\nFROM orders\nWHERE delivery_minutes BETWEEN 30 AND 45" },
            { q: "השיווק: \"כמה לקוחות הצטרפו במהלך 2025?\" (`join_date`)",
              answer: 54, unit: "שורות", hint: "תאריכים בפורמט 'YYYYMMDD'.",
              solution: "SELECT *\nFROM customers\nWHERE join_date BETWEEN '20250101' AND '20251231'" },
            { q: "צוות האפליקציה: \"אילו סלטים יש בתפריט?\" (כל מנה שבשם שלה מופיעה המילה Salad)",
              answer: 13, unit: "שורות",
              solution: "SELECT *\nFROM menu_items\nWHERE item_name LIKE '%Salad%'" },
            { q: "שירות הלקוחות: \"אילו ביקורות מתלוננות על איטיות?\" (המילה slow בעמודה `review_text`)",
              answer: 34, unit: "שורות",
              solution: "SELECT *\nFROM reviews\nWHERE review_text LIKE '%slow%'",
              note: "review_text = 'slow' היה מחזיר 0 שורות. צריך LIKE עם %." },
            { q: "השיווק: \"לאילו לקוחות יש טלפון שלא מתחיל ב־054?\"",
              answer: 127, unit: "שורות",
              solution: "SELECT *\nFROM customers\nWHERE phone NOT LIKE '054%'",
              note: "18 ועוד 127 זה 145, ולא 160. 15 הלקוחות בלי טלפון לא עוברים אף תנאי." }
          ] },

        { id: "7-2", kind: "lesson", title: "איזה כלי?",
          intro: "לכל בקשה: קודם בוחרים כלי (=, IN, BETWEEN, LIKE, או AND עם OR). רק אחר כך כותבים את השאילתה.",
          questions: [
            { q: "כל ההזמנות של לקוחה מספר 3", answer: 50, unit: "שורות",
              solution: "SELECT *\nFROM orders\nWHERE customer_id = 3", note: "הכלי: =" },
            { q: "השליחים שהתקבלו לעבודה במהלך 2024 (`hire_date`)", answer: 4, unit: "שורות",
              solution: "SELECT *\nFROM couriers\nWHERE hire_date BETWEEN '20240101' AND '20241231'", note: "הכלי: BETWEEN" },
            { q: "הלקוחות ששם המשפחה שלהם Cohen או Levi", answer: 14, unit: "שורות",
              solution: "SELECT *\nFROM customers\nWHERE last_name IN ('Cohen', 'Levi')", note: "הכלי: IN" },
            { q: "הקופונים של הקיץ (כל קוד שמתחיל ב־SUMMER, בעמודה `coupon_code`)", answer: 2, unit: "שורות",
              solution: "SELECT *\nFROM coupons\nWHERE coupon_code LIKE 'SUMMER%'", note: "הכלי: LIKE" },
            { q: "מנות שעולות בין 20 ל־25 שקל", answer: 31, unit: "שורות",
              solution: "SELECT *\nFROM menu_items\nWHERE price BETWEEN 20 AND 25", note: "הכלי: BETWEEN" },
            { q: "ההזמנות שבוטלו במסעדות 1 ו־2", answer: 3, unit: "שורות",
              solution: "SELECT *\nFROM orders\nWHERE restaurant_id IN (1, 2)\n  AND order_status = 'Cancelled'",
              note: "הכלי: IN עם AND. עם IN אין צורך בסוגריים." },
            { q: "הזמנות צהריים: בין 12:00 ל־14:00 (`order_time`)", answer: 274, unit: "שורות",
              solution: "SELECT *\nFROM orders\nWHERE order_time BETWEEN '12:00' AND '14:00'", note: "הכלי: BETWEEN. הקצוות כלולים." },
            { q: "ביקורות עם דירוג 1 או 2 (`rating`)", answer: 8, unit: "שורות",
              solution: "SELECT *\nFROM reviews\nWHERE rating IN (1, 2)", note: "הכלי: IN. גם rating <= 2 נכון." }
          ] },

        { id: "7-self", kind: "self", title: "תרגול עצמי: פרק 7",
          intro: "שאלות חדשות על IN, BETWEEN ו־LIKE. כתבו את השאילתה ב־SSMS והקלידו כמה שורות קיבלתם.",
          questions: [
            { q: "כמה מנות עולות בין 50 ל־60 שקל, כולל הקצוות?", answer: 28, unit: "שורות",
              solution: "SELECT *\nFROM menu_items\nWHERE price BETWEEN 50 AND 60" },
            { q: "כמה הזמנות נכנסו בין 19:00 ל־21:00?", answer: 406, unit: "שורות",
              solution: "SELECT *\nFROM orders\nWHERE order_time BETWEEN '19:00' AND '21:00'",
              note: "2 הזמנות נכנסו בדיוק ב־21:00, והן כלולות." },
            { q: "כמה לקוחות יש ששם המשפחה שלהם נגמר באות i?", answer: 16, unit: "שורות",
              hint: "איפה שמים את % כשמחפשים סוף של מילה?",
              solution: "SELECT *\nFROM customers\nWHERE last_name LIKE '%i'" },
            { q: "כמה הזמנות היו במסעדות 3, 5 או 7?", answer: 86, unit: "שורות",
              solution: "SELECT *\nFROM orders\nWHERE restaurant_id IN (3, 5, 7)" },
            { q: "כמה מנות יש בתפריט שבשם שלהן מופיעה המילה Chicken?", answer: 5, unit: "שורות",
              solution: "SELECT *\nFROM menu_items\nWHERE item_name LIKE '%Chicken%'" },
            { q: "כמה הזמנות בוטלו במרץ 2026?", answer: 5, unit: "שורות",
              hint: "שני תנאים: סטטוס וטווח תאריכים.",
              solution: "SELECT *\nFROM orders\nWHERE order_status = 'Cancelled'\n  AND order_date BETWEEN '20260301' AND '20260331'" }
          ] }
      ] },

    { n: 8,  title: "מיון ודירוג: ORDER BY, TOP", slides: "", practices: [] },
    { n: 9,  title: "פונקציות: סוגרים חשבונות פתוחים", slides: "", practices: [] },
    { n: 10, title: "תאריכים", slides: "", practices: [] },
    { n: 11, title: "CASE", slides: "", practices: [] },
    { n: 12, title: "פונקציות סיכום", slides: "", practices: [] },
    { n: 13, title: "GROUP BY", slides: "", practices: [] },
    { n: 14, title: "HAVING", slides: "", practices: [] },
    { n: 15, title: "JOIN", slides: "", practices: [] },
    { n: 16, title: "LEFT JOIN ו־self join", slides: "", practices: [] },
    { n: 17, title: "תתי־שאילתות", slides: "", practices: [] }
  ]
};
