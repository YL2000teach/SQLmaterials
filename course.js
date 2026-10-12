/* =====================================================================
   course.js: כל התוכן של הקורס נמצא כאן.
   כדי להוסיף תרגול: מוסיפים אובייקט לרשימה practices של הפרק.
   כדי להוסיף פרק: מוסיפים אובייקט לרשימה chapters.

   שדות של תרגול:
     id        מזהה ייחודי. הקישור לתרגול הוא practice.html?id=<id>
     kind      "lesson" = תרגול מהמצגת (טכני, זהה לשקף, עם בדיקה ופתרון)
               "self"   = תרגול עצמאי (שאלות עסקיות. התלמיד כותב שאילתה ותשובה במילים,
                          ומעתיק הכול למטלה ב־Classroom. הפתרונות לא מוצגים לתלמיד.
                          המורה רואה אותם בכתובת practice.html?id=<id>&teacher=1)
               בתרגול עצמאי answer משמש לבדיקה עצמית של מספר מפתח, ו־note הוא הערה למורה
     title     כותרת
     intro     שורת הסבר (לא חובה)
     questions רשימת שאלות. בכל שאלה:
        q         נוסח השאלה. קוד כותבים בין גרשיים הפוכים: `WHERE ...`
        בתרגול עצמאי אפשר לפרק את השאלה לחלקים במקום q:
        title (כותרת קצרה), context (רקע עסקי), task (מה לבדוק בשאילתה), explain (מה לכתוב במילים)
     answer    התשובה הנכונה: מספר, טקסט, או רשימת מספרים [25, 13, 11].
               בלי answer, השאלה פתוחה: אין בדיקה, רק כפתור "תשובה" שחושף את הפתרון
     label     טקסט ליד תיבת התשובה (לא חובה, ברירת המחדל: "התשובה שקיבלתם")
        unit      מה התלמיד מקליד, למשל "שורות" (לא חובה)
        hint      רמז (לא חובה)
        solution  שאילתת הפתרון
        note      הסבר שמופיע עם הפתרון (לא חובה)

   שדות של פרק:
     n, title, slides (קישור הטמעה של Google Slides, לא חובה), practices
     extras: רשימת שאלות רשות (באותו פורמט של questions). כולן מוצגות בדף אחד: extras.html
   ===================================================================== */

window.COURSE = {
  "title": "SQL עם FoodRush",
  "subtitle": "קורס SQL Server: ממסד נתונים ועד תתי־שאילתות",
  "setupPage": "setup.html",
  "labels": {
    "lesson": "תרגול מהמצגת",
    "self": "תרגול עצמאי",
    "extras": "תרגילי רשות"
  },
  "chapters": [
    {
      "n": 1,
      "title": "פתיחה, מסד נתונים וסביבת עבודה",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h164370b0e4373f29_0_0",
      "deckPages": [
        2,
        14
      ],
      "practices": []
    },
    {
      "n": 2,
      "title": "SELECT ו־FROM",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h3d3d73592439c8a8_1_8",
      "deckPages": [
        15,
        23
      ],
      "practices": [
        {
          "id": "2-1",
          "kind": "lesson",
          "title": "נתרגל",
          "questions": [
            {
              "q": "הריצו `SELECT * FROM orders` ומצאו את הזמנה מספר 6. אילו עמודות ריקות?",
              "solution": "SELECT *\nFROM orders",
              "note": "בהזמנה 6 ריקות (NULL) ארבע עמודות: courier_id, coupon_id, tip, delivery_minutes. זו הזמנה באיסוף עצמי, ולכן לא היה בה שליח ולא משלוח."
            },
            {
              "q": "כמה שורות יש בטבלאות couriers, cities ו־cuisines?",
              "answer": [
                25,
                13,
                11
              ],
              "label": "שלושה מספרים לפי הסדר",
              "hint": "שאילתה אחת לכל טבלה. מספר השורות מופיע בפינה הימנית התחתונה של SSMS.",
              "solution": "SELECT * FROM couriers\nSELECT * FROM cities\nSELECT * FROM cuisines",
              "note": "couriers: 25, cities: 13, cuisines: 11."
            },
            {
              "q": "הציגו את שם המנה ואת המחיר, כשהשם מופיע ראשון. (טבלה: `menu_items`)",
              "answer": 207,
              "unit": "שורות",
              "solution": "SELECT item_name, price\nFROM menu_items"
            },
            {
              "q": "קראו את הודעת השגיאה. `SELECT * FROM order_item` מחזירה Invalid object name. מה לא בסדר בשאילתה?",
              "solution": "SELECT *\nFROM order_items",
              "note": "שם הטבלה הוא order_items, עם s בסוף. SQL Server לא מכיר טבלה בשם order_item."
            }
          ]
        },
        {
          "id": "2-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 2",
          "intro": "משקיע שוקל להשקיע ב־FoodRush ושלח למנכ\"ל כמה שאלות על הפעילות. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים ומה הם אומרים.",
          "questions": [
            {
              "title": "כמה גדולה הפעילות",
              "context": "המשקיע רוצה לדעת כמה מסעדות, שליחים ולקוחות יש בחברה, כדי להשוות אותה לחברות אחרות.",
              "task": "שלפו את כל השורות מטבלת restaurants, מטבלת couriers ומטבלת customers, ובדקו כמה שורות יש בכל אחת. שאילתה אחת לכל טבלה.",
              "explain": "כמה מסעדות, שליחים ולקוחות יש, ובערך כמה לקוחות יש על כל שליח.",
              "answer": [
                30,
                25,
                160
              ],
              "label": "שלושה מספרים: מסעדות, שליחים, לקוחות",
              "hint": "מספר השורות מופיע בפינה הימנית התחתונה של SSMS.",
              "solution": "SELECT *\nFROM restaurants\n\nSELECT *\nFROM couriers\n\nSELECT *\nFROM customers",
              "note": "30 מסעדות, 25 שליחים ו־160 לקוחות: בערך 6 לקוחות על כל שליח. תשובה טובה נותנת את שלושת המספרים ומוסיפה יחס אחד לפחות."
            },
            {
              "title": "גודל התפריט",
              "context": "המשקיע שואל כמה אפשרויות בחירה יש ללקוח באפליקציה.",
              "task": "הציגו מטבלת `dish_categories` את שמות הקטגוריות, ומטבלת `menu_items` את שם המנה ואת המחיר.",
              "explain": "כמה קטגוריות וכמה מנות יש, ובערך כמה מנות יש לכל מסעדה (יש 30 מסעדות).",
              "answer": [
                5,
                207
              ],
              "label": "שני מספרים: קטגוריות, מנות",
              "solution": "SELECT category_name\nFROM dish_categories\n\nSELECT item_name, price\nFROM menu_items",
              "note": "5 קטגוריות ו־207 מנות: בממוצע קצת פחות מ־7 מנות למסעדה. תשובה טובה אומרת שהתפריט של כל מסעדה קטן יחסית."
            },
            {
              "title": "באילו אזורים אנחנו פועלים",
              "context": "המשקיע רוצה לדעת אם FoodRush פועלת בכל הארץ או רק באזור אחד.",
              "task": "הציגו מטבלת cities את שם העיר (`city_name`) ואת המחוז (district).",
              "explain": "בכמה ערים ובכמה מחוזים שונים FoodRush פועלת, ואם יש מחוז שבולט ביותר ערים.",
              "answer": [
                13,
                6
              ],
              "label": "שני מספרים: ערים, מחוזות",
              "hint": "את המחוזות סופרים בעיניים מתוך התוצאה. בפרק 4 נלמד לעשות את זה בשאילתה.",
              "solution": "SELECT city_name, district\nFROM cities",
              "note": "13 ערים ב־6 מחוזות: Tel Aviv, Jerusalem, Haifa, South, Center, North. במחוז Center יש הכי הרבה ערים (4). תשובה טובה אומרת שהפעילות פרושה בכל הארץ, אבל יש מחוזות עם עיר אחת בלבד."
            },
            {
              "title": "הקופונים של החברה",
              "context": "המשקיע חושש שהחברה נותנת יותר מדי הנחות, ורוצה לראות את רשימת הקופונים.",
              "task": "הציגו מטבלת coupons את קוד הקופון (`coupon_code`), אחוז ההנחה (`discount_pct`), ותאריכי התוקף (`valid_from`, `valid_to`).",
              "explain": "כמה קופונים יש, מה ההנחה הגדולה ביותר ומתי היא בתוקף, והאם לדעתכם ההנחות נראות גבוהות.",
              "answer": [
                8,
                50
              ],
              "label": "שני מספרים: קופונים, ההנחה הגדולה ביותר באחוזים",
              "solution": "SELECT coupon_code, discount_pct, valid_from, valid_to\nFROM coupons",
              "note": "8 קופונים. ההנחה הגדולה ביותר היא VIP50, 50%, בתוקף רק בספטמבר 2026. רוב הקופונים בין 10% ל־20%. תשובה טובה מציינת שההנחה הגבוהה היא חריגה ומוגבלת לחודש אחד."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "הציגו לכל שליח שם פרטי, שם משפחה וסוג רכב.",
          "answer": 25,
          "unit": "שורות",
          "solution": "SELECT first_name, last_name, vehicle_type\nFROM couriers"
        }
      ]
    },
    {
      "n": 3,
      "title": "עמודות מחושבות וכינויים",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h3d3d73592439c8a8_1_111",
      "deckPages": [
        24,
        33
      ],
      "practices": [
        {
          "id": "3-1",
          "kind": "lesson",
          "title": "נתרגל",
          "questions": [
            {
              "q": "מטבלת couriers: מספר השליח, ועמודה חדשה בפורמט `Courier name is Maya Cohen` (המשלבת טקסט, שם פרטי, ושם משפחה)",
              "answer": 25,
              "unit": "שורות",
              "hint": "שרשור עם +. שימו לב לרווחים בתוך הגרשיים.",
              "solution": "SELECT courier_id,\n       'Courier name is ' + first_name + ' ' + last_name AS courier_name\nFROM couriers"
            },
            {
              "q": "זמן הכנה כפול: בשישי בערב המטבח עמוס. הציגו לכל מסעדה את זמן ההכנה הרגיל, ואת זמן ההכנה כפול 1.5 (טבלה: `restaurants`)",
              "answer": 30,
              "unit": "שורות",
              "solution": "SELECT restaurant_name,\n       avg_prep_minutes,\n       avg_prep_minutes * 1.5 AS friday_prep_minutes\nFROM restaurants"
            },
            {
              "q": "לקוח השתמש בקופון של 15% הנחה. לכל שורה ב־order_items, הציגו את סכום השורה אחרי ההנחה.",
              "answer": 2507,
              "unit": "שורות",
              "solution": "SELECT order_id, item_id,\n       quantity * unit_price * 0.85 AS line_total_after_discount\nFROM order_items"
            },
            {
              "q": "אתגר: מטבלת customers, עמודה אחת עם שם מלא, רווח, ומספר טלפון. בדקו את כל השורות. מה קרה, ולמה?",
              "answer": 15,
              "unit": "שורות",
              "label": "בכמה שורות התקבל NULL",
              "solution": "SELECT first_name + ' ' + last_name + ' ' + phone AS contact\nFROM customers",
              "note": "ל־15 לקוחות אין טלפון. שרשור עם NULL מחזיר NULL, ולכן כל העמודה שלהם ריקה, גם השם."
            }
          ]
        },
        {
          "id": "3-2",
          "kind": "lesson",
          "title": "מה תהיה התוצאה?",
          "intro": "לפני שנריץ את השאילתה, נחשוב מה תהיה התוצאה. אחר כך הריצו ובדקו.",
          "questions": [
            {
              "q": "`SELECT price * 2 FROM menu_items`",
              "solution": "SELECT price * 2\nFROM menu_items",
              "note": "207 שורות. עמודה אחת בלי שם (No column name), עם המחיר כפול 2."
            },
            {
              "q": "`SELECT 'order ' + order_id FROM orders`",
              "solution": "SELECT 'order ' + order_id\nFROM orders",
              "note": "שגיאה. order_id הוא מספר, ולכן SQL Server מנסה להפוך את 'order ' למספר ונכשל."
            },
            {
              "q": "`SELECT order_id, tip + 5 AS tip_plus FROM orders`",
              "solution": "SELECT order_id, tip + 5 AS tip_plus\nFROM orders",
              "note": "1250 שורות. ב־179 הזמנות tip הוא NULL, ולכן גם tip_plus הוא NULL."
            },
            {
              "q": "`SELECT first_name + last_name AS full_name FROM couriers`",
              "solution": "SELECT first_name + last_name AS full_name\nFROM couriers",
              "note": "25 שורות, אבל השם והמשפחה צמודים בלי רווח: MayaCohen."
            }
          ]
        },
        {
          "id": "3-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 3",
          "intro": "מחלקת הכספים בודקת כמה שינויים במחירים ובעמלות, ורוצה לראות איך הם ייראו על הנתונים האמיתיים. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין.",
          "questions": [
            {
              "title": "העלאה של דמי המשלוח",
              "context": "הכספים שוקלים להעלות את דמי המשלוח ב־2 שקלים לכל הזמנה, ורוצים לראות את המחיר החדש לצד הישן.",
              "task": "מטבלת orders הציגו את מספר ההזמנה, את `delivery_fee`, ועמודה חדשה בשם `new_fee` עם דמי המשלוח ועוד 2. מצאו בתוצאה את הזמנה 1 ואת הזמנה 6.",
              "explain": "מה דמי המשלוח החדשים בהזמנה 1 ובהזמנה 6, ומה הבעיה שהחישוב יוצר בהזמנה 6 (רמז: מה קרה בה בפרק 2?).",
              "answer": [
                16.9,
                2
              ],
              "label": "שני מספרים: הזמנה 1, הזמנה 6",
              "solution": "SELECT order_id,\n       delivery_fee,\n       delivery_fee + 2 AS new_fee\nFROM orders",
              "note": "הזמנה 1: 16.90. הזמנה 6: 2.00. הזמנה 6 היא איסוף עצמי, ודמי המשלוח בה 0. החישוב הפשוט מחייב 2 שקלים גם על הזמנה בלי משלוח. תשובה טובה מזהה שצריך להחריג הזמנות באיסוף עצמי."
            },
            {
              "title": "מחירים לתיירים",
              "context": "צוות האפליקציה רוצה להציג לתיירים את המחירים גם בדולרים, לפי שער קבוע של 3.7 שקלים לדולר.",
              "task": "מטבלת `menu_items` הציגו את שם המנה, את המחיר בשקלים, ועמודה בשם `price_usd` עם המחיר בדולרים.",
              "explain": "כמה עולה שקשוקה (Shakshuka) בדולרים, ומה הבעיה בהצגה של המספר כמו שהוא יוצא מהשאילתה.",
              "answer": 12.97,
              "label": "מחיר השקשוקה בדולרים, שתי ספרות אחרי הנקודה",
              "solution": "SELECT item_name,\n       price,\n       price / 3.7 AS price_usd\nFROM menu_items",
              "note": "48 / 3.7 = 12.972972. באפליקציה מציגים מחיר עם שתי ספרות אחרי הנקודה, ולכן צריך לעגל. ROUND נלמד בפרק 9. תשובה טובה מציינת את הבעיה בתצוגה."
            },
            {
              "title": "עמלה למסעדות",
              "context": "הכספים בודקים עמלה של 25% מכל שורה בהזמנה, ורוצים לראות כמה זה יוצא בהזמנה אמיתית.",
              "task": "מטבלת `order_items` הציגו את `order_id`, `item_id`, quantity, `unit_price`, ועמודה בשם commission: הכמות כפול המחיר כפול 0.25. מצאו בתוצאה את השורות של הזמנה 1.",
              "explain": "כמה שורות יש בהזמנה 1, מה העמלה על כל אחת, וכמה FoodRush תרוויח מההזמנה כולה.",
              "answer": [
                4.75,
                4.25
              ],
              "label": "שני מספרים: העמלה על מנה 113, העמלה על מנה 115",
              "solution": "SELECT order_id, item_id, quantity, unit_price,\n       quantity * unit_price * 0.25 AS commission\nFROM order_items",
              "note": "בהזמנה 1 שתי שורות: מנה 113 (19.00) עם עמלה 4.75, ומנה 115 (17.00) עם עמלה 4.25. ביחד 9.00 שקלים. תשובה טובה מחברת את שתי השורות לסכום של ההזמנה."
            },
            {
              "title": "הודעת SMS ללקוחות",
              "context": "שירות הלקוחות רוצה לשלוח לכל לקוח הודעה אישית עם השם שלו, ולבדוק קודם איך ההודעות ייראו.",
              "task": "מטבלת customers הציגו את מספר הלקוח ועמודה בשם sms עם הטקסט Hi, השם הפרטי, ואחריו your order is on the way. למשל: Hi Omer, your order is on the way",
              "explain": "איך נראית ההודעה של לקוח 1, ומה צריך לבדוק בטקסט לפני ששולחים אותו ל־160 לקוחות (רווחים, פסיקים).",
              "solution": "SELECT customer_id,\n       'Hi ' + first_name + ', your order is on the way' AS sms\nFROM customers",
              "note": "לקוח 1: Hi Omer, your order is on the way. טעויות נפוצות: חסר רווח אחרי Hi, או חסר פסיק. תשובה טובה מציינת שבודקים את הטקסט על כמה שורות לפני שליחה."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "מ־orders הציגו את `delivery_minutes` ואת `delivery_minutes / 60`. מה קיבלתם? עכשיו נסו `/ 60.0`",
          "solution": "SELECT delivery_minutes,\n       delivery_minutes / 60 AS hours_int,\n       delivery_minutes / 60.0 AS hours\nFROM orders",
          "note": "חלוקה של מספר שלם במספר שלם מחזירה מספר שלם: 40 / 60 נותן 0. עם 60.0 מתקבל 0.666666."
        }
      ]
    },
    {
      "n": 4,
      "title": "DISTINCT",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h3d3d73592439c8a8_1_195",
      "deckPages": [
        34,
        38
      ],
      "practices": [
        {
          "id": "4-1",
          "kind": "lesson",
          "title": "נתרגל",
          "questions": [
            {
              "q": "שלפו מטבלת orders את מספרי הלקוחות, כשכל לקוח מופיע פעם אחת. כמה שורות התקבלו?",
              "answer": 153,
              "unit": "שורות",
              "solution": "SELECT DISTINCT customer_id\nFROM orders"
            },
            {
              "q": "שלפו את מספרי הלקוחות מטבלת customers. השתמשו ב־DISTINCT, כמה שורות התקבלו? מה המשמעות של הפער בין שתי התשובות?",
              "answer": 160,
              "unit": "שורות",
              "solution": "SELECT DISTINCT customer_id\nFROM customers",
              "note": "הפער מהסעיף הקודם: 7 לקוחות רשומים במערכת ולא הזמינו אף פעם."
            },
            {
              "q": "שלפו את מספרי הלקוחות מטבלת customers ללא DISTINCT. כמה שורות התקבלו? האם משהו השתנה מהסעיף הקודם?",
              "answer": 160,
              "unit": "שורות",
              "solution": "SELECT customer_id\nFROM customers",
              "note": "אותו מספר כמו בסעיף הקודם. customer_id הוא המפתח הראשי, ולכן כל ערך מופיע בו פעם אחת גם בלי DISTINCT."
            },
            {
              "q": "כמה שילובים של מסעדה וסטטוס הזמנה קיימים? (טבלה: `orders`)",
              "answer": 85,
              "unit": "שורות",
              "solution": "SELECT DISTINCT restaurant_id, order_status\nFROM orders"
            }
          ]
        },
        {
          "id": "4-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 4",
          "intro": "ההנהלה רוצה לדעת כמה מהמשאבים של החברה באמת פעילים: מסעדות, שליחים וערים. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין.",
          "questions": [
            {
              "title": "מסעדות שלא קיבלו הזמנות",
              "context": "מנהלת קשרי המסעדות רוצה לדעת אם יש מסעדות שמשלמות דמי מנוי ולא קיבלו אף הזמנה.",
              "task": "מטבלת orders שלפו את מספרי המסעדות, כשכל מסעדה מופיעה פעם אחת. השוו למספר המסעדות בטבלת restaurants.",
              "explain": "כמה מסעדות קיבלו לפחות הזמנה אחת, כמה לא קיבלו אף הזמנה, ומה כדאי למנהלת לעשות.",
              "answer": 29,
              "label": "כמה מסעדות קיבלו הזמנות",
              "solution": "SELECT DISTINCT restaurant_id\nFROM orders",
              "note": "29 מתוך 30. מסעדה אחת בלי הזמנות בכלל (מסעדה 30, שנפתחה אחרי סוף הנתונים: יתגלה בפרק 8). תשובה טובה מציעה לבדוק למה."
            },
            {
              "title": "שליחים פעילים",
              "context": "רכזת השליחים רוצה לדעת כמה מהשליחים שמופיעים במערכת ביצעו בפועל משלוחים.",
              "task": "מטבלת orders שלפו את מספרי השליחים (`courier_id`), כשכל שליח מופיע פעם אחת. הסתכלו היטב על השורה הראשונה.",
              "explain": "כמה שליחים ביצעו לפחות משלוח אחד מתוך 25, ולמה מספר השורות בתוצאה לא שווה למספר השליחים.",
              "answer": 24,
              "label": "כמה שליחים ביצעו משלוחים",
              "hint": "מה מייצג NULL בעמודה courier_id?",
              "solution": "SELECT DISTINCT courier_id\nFROM orders",
              "note": "25 שורות, אבל אחת מהן היא NULL: הזמנות בלי משלוח. כלומר 24 שליחים ביצעו משלוחים, ושליח אחד לא ביצע אף משלוח. תשובה טובה מסבירה ש־DISTINCT מחזיר גם את NULL כערך."
            },
            {
              "title": "לאן להתרחב",
              "context": "ההנהלה מחפשת עיר חדשה לגייס בה מסעדות, ורוצה עיר שיש בה כבר לקוחות אבל אין בה מסעדות.",
              "task": "שלפו את הערים (`city_id`) שיש בהן לקוחות, כל עיר פעם אחת. אחר כך שלפו באותה דרך את הערים שיש בהן מסעדות.",
              "explain": "בכמה ערים יש לקוחות, בכמה יש מסעדות, ומה זה אומר על האפשרות להתרחב.",
              "answer": [
                13,
                11
              ],
              "label": "שני מספרים: ערים עם לקוחות, ערים עם מסעדות",
              "solution": "SELECT DISTINCT city_id\nFROM customers\n\nSELECT DISTINCT city_id\nFROM restaurants",
              "note": "לקוחות יש בכל 13 הערים, ומסעדות רק ב־11. בערים 12 ו־13 (Kiryat Shmona ו־Eilat) יש לקוחות ואין מסעדות. תשובה טובה ממליצה לבדוק את שתי הערים האלה."
            },
            {
              "title": "לקוחות חוזרים למסעדה",
              "context": "השיווק רוצה לדעת אם לקוחות חוזרים לאותה מסעדה, או מנסים כל פעם מסעדה אחרת.",
              "task": "מטבלת orders שלפו את כל השילובים השונים של לקוח ומסעדה (`customer_id`, `restaurant_id`). השוו למספר ההזמנות הכולל, 1250.",
              "explain": "כמה שילובים שונים יש, בערך כמה הזמנות יש בממוצע לכל שילוב של לקוח ומסעדה, ומה זה אומר על הנאמנות של הלקוחות.",
              "answer": 512,
              "label": "כמה שילובים",
              "solution": "SELECT DISTINCT customer_id, restaurant_id\nFROM orders",
              "note": "512 שילובים מתוך 1250 הזמנות: בממוצע כ־2.4 הזמנות לכל לקוח בכל מסעדה. כלומר, לקוחות נוטים לחזור לאותן מסעדות. תשובה טובה מחלקת ומסבירה את המשמעות."
            },
            {
              "title": "ימים בלי הזמנות",
              "context": "מנהלת התפעול רוצה לדעת אם יש ימים שבהם האתר לא קיבל אף הזמנה.",
              "task": "מטבלת orders שלפו את התאריכים (`order_date`), כל תאריך פעם אחת. בתקופה של הנתונים, מ־1 בינואר 2025 עד 30 ביוני 2026, יש 546 ימים.",
              "explain": "בכמה ימים היו הזמנות, בכמה ימים לא הייתה אף הזמנה, ואם לדעתכם זה מדאיג.",
              "answer": 495,
              "label": "בכמה ימים היו הזמנות",
              "solution": "SELECT DISTINCT order_date\nFROM orders",
              "note": "495 ימים עם הזמנות, ו־51 ימים בלי אף הזמנה: בערך יום אחד מכל עשרה. תשובה טובה מציעה לבדוק אילו ימים אלה."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "באילו אמצעי תשלום נעשה שימוש בהזמנות? (`payment_method_id`)",
          "answer": 5,
          "unit": "שורות",
          "solution": "SELECT DISTINCT payment_method_id\nFROM orders"
        }
      ]
    },
    {
      "n": 5,
      "title": "WHERE",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h16075b42f38d69e2_0_0",
      "deckPages": [
        39,
        52
      ],
      "practices": [
        {
          "id": "5-1",
          "kind": "lesson",
          "title": "נתרגל",
          "intro": "כל בקשה היא שאילתה אחת עם תנאי אחד.",
          "questions": [
            {
              "q": "רכזת השליחים: \"אילו שליחים נוסעים ברכב?\" (`vehicle_type`) (טבלה: `couriers`)",
              "answer": 4,
              "unit": "שורות",
              "solution": "SELECT *\nFROM couriers\nWHERE vehicle_type = 'Car'"
            },
            {
              "q": "הכספים: \"באילו הזמנות השליח לא קיבל טיפ?\" אחר כך הריצו גם `WHERE tip IS NULL`. למה התשובות שונות? (טבלה: `orders`)",
              "answer": 381,
              "unit": "שורות",
              "solution": "SELECT *\nFROM orders\nWHERE tip = 0",
              "note": "WHERE tip IS NULL מחזיר 179. טיפ 0 הוא משלוח שנמסר בלי טיפ. NULL הוא הזמנה שלא היה בה משלוח."
            },
            {
              "q": "שליח מספר 7 טוען שביצע יותר משלושים משלוחים. האם הוא צודק? (`courier_id`) (טבלה: `orders`)",
              "answer": 36,
              "unit": "שורות",
              "label": "כמה משלוחים יש לו",
              "solution": "SELECT *\nFROM orders\nWHERE courier_id = 7",
              "note": "הוא צודק: 36."
            },
            {
              "q": "משאבי אנוש: \"לאילו שליחים אין אחראי מעליהם?\" מי הם לדעתכם? (`supervisor_id`) (טבלה: `couriers`)",
              "answer": 3,
              "unit": "שורות",
              "solution": "SELECT *\nFROM couriers\nWHERE supervisor_id IS NULL",
              "note": "שלושת השליחים האלה הם האחראים בעצמם."
            }
          ]
        },
        {
          "id": "5-2",
          "kind": "lesson",
          "title": "מה נקבל ואיך נתקן?",
          "intro": "לפני שנריץ את השאילתה, נחשוב מה תהיה התוצאה וכיצד נוכל לתקן.",
          "questions": [
            {
              "q": "`SELECT * FROM customers WHERE phone = NULL`",
              "solution": "SELECT *\nFROM customers\nWHERE phone IS NULL",
              "note": "0 שורות, בלי שגיאה. אי אפשר להשוות ל־NULL עם =. התיקון: IS NULL, ומתקבלות 15 שורות."
            },
            {
              "q": "`SELECT * FROM menu_items WHERE item_name = shakshuka`",
              "solution": "SELECT *\nFROM menu_items\nWHERE item_name = 'Shakshuka'",
              "note": "שגיאה: Invalid column name 'shakshuka'. בלי גרשיים SQL Server חושב שזה שם של עמודה."
            },
            {
              "q": "`SELECT * FROM orders WHERE order_date = 2025-07-04`",
              "solution": "SELECT *\nFROM orders\nWHERE order_date = '20250704'",
              "note": "שגיאה. בלי גרשיים זה חשבון: 2025 פחות 7 פחות 4. תאריך כותבים בגרשיים, בפורמט 'YYYYMMDD'."
            },
            {
              "q": "`SELECT * FROM orders WHERE order_status = \"Delivered\"`",
              "solution": "SELECT *\nFROM orders\nWHERE order_status = 'Delivered'",
              "note": "שגיאה: Invalid column name 'Delivered'. גרשיים כפולים מסמנים שם עמודה. טקסט כותבים בגרשיים בודדים."
            }
          ]
        },
        {
          "id": "5-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 5",
          "intro": "כמה מחלקות מכינות הצעות לשינויים באפליקציה, וכל אחת צריכה נתון אחד כדי להחליט. לכל שאלה כתבו שאילתה עם תנאי אחד, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין.",
          "questions": [
            {
              "title": "\"רוב הלקוחות נותנים לנו 5 כוכבים\"",
              "context": "השיווק רוצה לכתוב בפרסומת שרוב הביקורות הן 5 כוכבים, וצריך לבדוק שזה נכון.",
              "task": "מטבלת reviews מצאו את כל הביקורות עם דירוג 5 (rating). בטבלה יש 470 ביקורות.",
              "explain": "כמה ביקורות הן 5 כוכבים, איזה אחוז הן מכל הביקורות, והאם מותר לכתוב בפרסומת \"רוב הלקוחות\".",
              "answer": 227,
              "label": "כמה ביקורות",
              "solution": "SELECT *\nFROM reviews\nWHERE rating = 5",
              "note": "227 מתוך 470, כ־48%. זה פחות מחצי, ולכן \"רוב\" לא נכון. תשובה טובה מציעה ניסוח מדויק, למשל \"כמעט חצי מהביקורות\"."
            },
            {
              "title": "\"משלוח תוך שעה או כסף בחזרה\"",
              "context": "השיווק רוצה להבטיח החזר כספי על כל משלוח שלוקח יותר משעה, והכספים רוצים לדעת כמה זה יעלה.",
              "task": "מטבלת orders מצאו את כל ההזמנות שבהן `delivery_minutes` גדול מ־60. בטבלה יש 1071 משלוחים.",
              "explain": "כמה משלוחים לקחו יותר משעה, איזה חלק הם מכל המשלוחים, והאם ההבטחה מסוכנת לחברה.",
              "answer": 6,
              "label": "כמה משלוחים",
              "solution": "SELECT *\nFROM orders\nWHERE delivery_minutes > 60",
              "note": "6 משלוחים מתוך 1071, פחות מאחד מכל מאה. ההחזר יעלה מעט מאוד. תשובה טובה ממליצה על ההבטחה ומנמקת במספרים."
            },
            {
              "title": "האם לבטל את האיסוף העצמי",
              "context": "צוות האפליקציה רוצה להוריד את כפתור \"איסוף עצמי\" כדי לפשט את המסך, אבל רק אם מעט לקוחות משתמשים בו.",
              "task": "מטבלת orders מצאו את כל ההזמנות שהסטטוס שלהן Picked Up. בטבלה יש 1250 הזמנות.",
              "explain": "כמה הזמנות היו באיסוף עצמי, איזה חלק הן מכל ההזמנות, והאם הייתם מורידים את הכפתור.",
              "answer": 107,
              "label": "כמה הזמנות",
              "solution": "SELECT *\nFROM orders\nWHERE order_status = 'Picked Up'",
              "note": "107 מתוך 1250, כ־9%: בערך הזמנה אחת מכל אחת־עשרה. תשובה טובה אומרת שזה לא זניח, ושהורדת הכפתור תפגע בחלק מהלקוחות."
            },
            {
              "title": "מנות פרימיום",
              "context": "השיווק שוקל להוסיף לאפליקציה לשונית \"פרימיום\" למנות שעולות יותר מ־70 שקל.",
              "task": "מטבלת `menu_items` מצאו את כל המנות שהמחיר שלהן גבוה מ־70. בתפריט יש 207 מנות.",
              "explain": "כמה מנות ייכנסו ללשונית, איזה חלק הן מהתפריט, והאם יש מספיק מנות כדי להצדיק לשונית נפרדת.",
              "answer": 9,
              "label": "כמה מנות",
              "solution": "SELECT *\nFROM menu_items\nWHERE price > 70",
              "note": "9 מנות מתוך 207, כ־4%. לשונית עם 9 מנות תיראה ריקה. תשובה טובה ממליצה להוריד את הסף או לוותר על הלשונית."
            },
            {
              "title": "מסעדות איטיות",
              "context": "מנהלת התפעול שוקלת לשלוח יועץ למסעדות שזמן ההכנה הממוצע שלהן יותר מ־20 דקות.",
              "task": "מטבלת restaurants מצאו את כל המסעדות שבהן `avg_prep_minutes` גדול מ־20. יש 30 מסעדות.",
              "explain": "כמה מסעדות צריכות יועץ, ואם לדעתכם זו בעיה כללית או בעיה של מסעדות בודדות.",
              "answer": 2,
              "label": "כמה מסעדות",
              "solution": "SELECT *\nFROM restaurants\nWHERE avg_prep_minutes > 20",
              "note": "2 מסעדות מתוך 30. זו בעיה נקודתית, ואפשר לטפל בה ישירות מול שתי המסעדות. תשובה טובה מציינת את שמות המסעדות."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "מנהל Shuk Kitchen: \"תראו לי את כל ההזמנות של המסעדה שלי.\" (`restaurant_id = 1`)",
          "answer": 34,
          "unit": "שורות",
          "solution": "SELECT *\nFROM orders\nWHERE restaurant_id = 1"
        },
        {
          "q": "השיווק: \"אילו לקוחות הצטרפו בעקבות המלצה של לקוח אחר?\" (`referred_by`)",
          "answer": 46,
          "unit": "שורות",
          "solution": "SELECT *\nFROM customers\nWHERE referred_by IS NOT NULL",
          "note": "דורש IS NOT NULL, שלא נלמד בפרק 5 (מופיע בפרק 8)."
        },
        {
          "q": "המטבח: \"אילו מנות לא זמינות כרגע?\" (`is_available`)",
          "answer": 9,
          "unit": "שורות",
          "solution": "SELECT *\nFROM menu_items\nWHERE is_available = 0"
        }
      ]
    },
    {
      "n": 6,
      "title": "כמה תנאים ביחד: AND, OR, NOT",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h16075b42f38d69e2_0_177",
      "deckPages": [
        53,
        61
      ],
      "practices": [
        {
          "id": "6-1",
          "kind": "lesson",
          "title": "נתרגל",
          "intro": "כל בקשה דורשת שניים או שלושה תנאים. לפני שכותבים: האם צריך סוגריים?",
          "questions": [
            {
              "q": "מנהל Shuk Kitchen: \"כמה הזמנות היו לי מאז תחילת 2026?\" (`restaurant_id = 1`) (טבלה: `orders`)",
              "answer": 14,
              "unit": "שורות",
              "solution": "SELECT *\nFROM orders\nWHERE restaurant_id = 1\n  AND order_date >= '20260101'"
            },
            {
              "q": "מנהלת התפעול: \"אילו מסעדות בתל אביב (`city_id = 1`) או בירושלים (`city_id = 4`) מכינות את האוכל ביותר מ־18 דקות בממוצע (`avg_prep_minutes`)?\" (טבלה: `restaurants`)",
              "answer": 4,
              "unit": "שורות",
              "hint": "AND ו־OR באותה שאילתה.",
              "solution": "SELECT *\nFROM restaurants\nWHERE avg_prep_minutes > 18\n  AND (city_id = 1 OR city_id = 4)",
              "note": "בלי סוגריים מתקבלות 5 שורות: נוספת מסעדה בירושלים שמכינה מהר יותר."
            },
            {
              "q": "הכספים: \"באילו הזמנות השתמשו בקופון, וההזמנה לא בוטלה?\" (טבלה: `orders`)",
              "answer": 249,
              "unit": "שורות",
              "hint": "NOT לפני כל אחד משני התנאים: הקופון לא ריק, והסטטוס לא Cancelled.",
              "solution": "SELECT *\nFROM orders\nWHERE NOT coupon_id IS NULL\n  AND NOT order_status = 'Cancelled'",
              "note": "גם coupon_id IS NOT NULL AND order_status <> 'Cancelled' נכון, ומחזיר 249."
            },
            {
              "q": "צוות המשמרות: \"כמה הזמנות נכנסו אחרי 22:00 או לפני 12:00?\" (טבלה: `orders`)",
              "answer": 196,
              "unit": "שורות",
              "solution": "SELECT *\nFROM orders\nWHERE order_time >= '22:00'\n   OR order_time < '12:00'"
            }
          ]
        },
        {
          "id": "6-2",
          "kind": "lesson",
          "title": "נתרגם את הבקשה",
          "intro": "לכל בקשה יש שני תנאי WHERE, א ו־ב. רק אחד מהם עונה על הבקשה. מהו, ומה מחזיר השני? הקלידו את האות של התנאי הנכון.",
          "questions": [
            {
              "q": "שליחים שלא נוסעים בקטנוע וגם לא ברכב.<br>א: `vehicle_type <> 'Scooter' OR vehicle_type <> 'Car'`<br>ב: `vehicle_type <> 'Scooter' AND vehicle_type <> 'Car'`",
              "answer": "ב",
              "label": "התנאי הנכון (א או ב)",
              "solution": "WHERE vehicle_type <> 'Scooter'\n  AND vehicle_type <> 'Car'",
              "note": "ב מחזיר 6. א מחזיר 25, כל השליחים: כל שליח שונה לפחות מאחד משני הערכים."
            },
            {
              "q": "הזמנות שבהן השליח לא קיבל טיפ, כולל הזמנות בלי משלוח.<br>א: `tip = 0 OR tip IS NULL`<br>ב: `tip = 0 AND tip IS NULL`",
              "answer": "א",
              "label": "התנאי הנכון (א או ב)",
              "solution": "WHERE tip = 0\n   OR tip IS NULL",
              "note": "א מחזיר 560. ב מחזיר 0: אין ערך שהוא גם 0 וגם NULL."
            },
            {
              "q": "מנות שאינן טבעוניות וגם לא זמינות.<br>א: `NOT is_vegan = 1 OR is_available = 1`<br>ב: `NOT (is_vegan = 1 OR is_available = 1)`",
              "answer": "ב",
              "label": "התנאי הנכון (א או ב)",
              "solution": "WHERE NOT (is_vegan = 1 OR is_available = 1)",
              "note": "ב מחזיר 2. א מחזיר 200: כל המנות הלא טבעוניות, ועוד כל המנות הזמינות."
            }
          ]
        },
        {
          "id": "6-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 6",
          "intro": "כמה מחלקות בודקות הנחות עבודה שלהן לפני שמחליטים, וכל בדיקה דורשת יותר מתנאי אחד. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין.",
          "questions": [
            {
              "title": "האם לקוחות שמשלמים במזומן מבטלים יותר",
              "context": "הכספים רוצים לחייב תשלום מראש, כי לדעתם לקוחות שמשלמים במזומן מבטלים הזמנות יותר מאחרים.",
              "task": "ספרו כמה הזמנות שולמו במזומן (`payment_method_id = 5`), וכמה מהן בוטלו (`order_status = 'Cancelled'`). עשו אותו דבר לכרטיס אשראי (`payment_method_id = 1`).",
              "explain": "כמה הזמנות בוטלו בכל אמצעי תשלום ומתוך כמה, והאם ההנחה של הכספים נכונה.",
              "answer": [
                58,
                0,
                597,
                44
              ],
              "label": "ארבעה מספרים: מזומן, מזומן שבוטלו, אשראי, אשראי שבוטלו",
              "solution": "SELECT *\nFROM orders\nWHERE payment_method_id = 5\n\nSELECT *\nFROM orders\nWHERE payment_method_id = 5\n  AND order_status = 'Cancelled'\n\nSELECT *\nFROM orders\nWHERE payment_method_id = 1\n\nSELECT *\nFROM orders\nWHERE payment_method_id = 1\n  AND order_status = 'Cancelled'",
              "note": "במזומן: 0 ביטולים מתוך 58. באשראי: 44 מתוך 597, כ־7%. ההנחה של הכספים לא נכונה. תשובה טובה אומרת את זה במפורש ומשווה אחוזים."
            },
            {
              "title": "האם קופון הצהריים משמש בצהריים",
              "context": "קופון LUNCH10 (`coupon_id = 5`) נועד להגדיל הזמנות בצהריים, והשיווק רוצה לדעת אם לקוחות משתמשים בו בשעות אחרות.",
              "task": "ספרו בכמה הזמנות השתמשו בקופון 5, ובכמה מהן `order_time` בין 12:00 (כולל) ל־15:00 (לא כולל).",
              "explain": "כמה פעמים השתמשו בקופון, כמה מהן בצהריים, והאם הקופון עושה את מה שהוא נועד לעשות.",
              "answer": [
                25,
                23
              ],
              "label": "שני מספרים: כל השימושים, בצהריים",
              "hint": "שלושה תנאים: הקופון, שעת ההתחלה ושעת הסיום.",
              "solution": "SELECT *\nFROM orders\nWHERE coupon_id = 5\n\nSELECT *\nFROM orders\nWHERE coupon_id = 5\n  AND order_time >= '12:00'\n  AND order_time < '15:00'",
              "note": "23 מתוך 25 שימושים היו בצהריים. הקופון משמש כמעט רק למטרה שלו. תשובה טובה מוסיפה ש־25 שימושים בסך הכול זה מעט, ולכן אולי צריך לפרסם אותו יותר."
            },
            {
              "title": "האם משלוח איטי פוגע בטיפ",
              "context": "השליחים טוענים שכשהמשלוח מתעכב הם מפסידים את הטיפ, ורכזת השליחים רוצה לבדוק את זה לפני שהיא משנה את שיטת התגמול.",
              "task": "ספרו כמה משלוחים לקחו יותר מ־50 דקות, וכמה מהם קיבלו טיפ (`tip > 0`). ספרו גם כמה מכל המשלוחים קיבלו טיפ. יש 1071 משלוחים.",
              "explain": "איזה אחוז מהמשלוחים האיטיים קיבלו טיפ, איזה אחוז מכל המשלוחים קיבלו טיפ, והאם הטענה של השליחים נכונה.",
              "answer": [
                85,
                51,
                690
              ],
              "label": "שלושה מספרים: משלוחים איטיים, איטיים עם טיפ, כל המשלוחים עם טיפ",
              "solution": "SELECT *\nFROM orders\nWHERE delivery_minutes > 50\n\nSELECT *\nFROM orders\nWHERE delivery_minutes > 50\n  AND tip > 0\n\nSELECT *\nFROM orders\nWHERE tip > 0",
              "note": "משלוחים איטיים: 51 מתוך 85 קיבלו טיפ, 60%. כל המשלוחים: 690 מתוך 1071, 64%. ההבדל קטן, והטענה כמעט לא נתמכת בנתונים. תשובה טובה משווה בין שני האחוזים."
            },
            {
              "title": "קמפיין טבעוני",
              "context": "השיווק מתכנן קמפיין של מנות טבעוניות עד 40 שקל, ורוצה לדעת כמה מנות כאלה יש שאפשר להזמין עכשיו.",
              "task": "מטבלת `menu_items` ספרו כמה מנות טבעוניות (`is_vegan = 1`) זמינות עכשיו (`is_available = 1`). אחר כך ספרו כמה מהן עולות פחות מ־40 שקל.",
              "explain": "כמה מנות טבעוניות זמינות, כמה מהן מתאימות לקמפיין, והאם יש מספיק מבחר לקמפיין.",
              "answer": [
                89,
                74
              ],
              "label": "שני מספרים: טבעוניות זמינות, מתוכן עד 40 שקל",
              "solution": "SELECT *\nFROM menu_items\nWHERE is_vegan = 1\n  AND is_available = 1\n\nSELECT *\nFROM menu_items\nWHERE is_vegan = 1\n  AND is_available = 1\n  AND price < 40",
              "note": "89 מנות טבעוניות זמינות, ו־74 מהן עולות פחות מ־40 שקל. יש מבחר גדול. תשובה טובה מציינת שרוב המנות הטבעוניות זולות."
            },
            {
              "title": "תוספת קטנה לסל",
              "context": "צוות האפליקציה רוצה להציע ללקוח בסוף ההזמנה \"משהו קטן\" שאינו שתייה, במחיר של פחות מ־20 שקל.",
              "task": "מטבלת `menu_items` מצאו את כל המנות שאינן שתייה (`category_id = 5` הוא שתייה) והמחיר שלהן נמוך מ־20. השתמשו ב־NOT.",
              "explain": "כמה מנות מתאימות, האם זה מספיק כדי להציע משהו בכל מסעדה (יש 30 מסעדות), ומה הייתם ממליצים.",
              "answer": 12,
              "label": "כמה מנות",
              "solution": "SELECT *\nFROM menu_items\nWHERE NOT category_id = 5\n  AND price < 20",
              "note": "12 מנות בלבד, פחות ממספר המסעדות. ברוב המסעדות לא יהיה מה להציע. תשובה טובה ממליצה להעלות את הסף או לכלול שתייה."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "המטבח: \"אילו מנות טבעוניות עולות פחות מ־30 שקל?\"",
          "answer": 60,
          "unit": "שורות",
          "solution": "SELECT *\nFROM menu_items\nWHERE is_vegan = 1\n  AND price < 30"
        },
        {
          "q": "מנהלת התפעול: \"אילו משלוחים לקחו יותר מ־45 דקות, והשליח לא קיבל טיפ?\"",
          "answer": 63,
          "unit": "שורות",
          "solution": "SELECT *\nFROM orders\nWHERE delivery_minutes > 45\n  AND tip = 0"
        },
        {
          "q": "השיווק: \"לאילו לקוחות אין טלפון, והם הגיעו בהמלצה של לקוח אחר?\"",
          "answer": 4,
          "unit": "שורות",
          "solution": "SELECT *\nFROM customers\nWHERE phone IS NULL\n  AND referred_by IS NOT NULL"
        },
        {
          "q": "רכזת השליחים: \"אני רוצה את כל ההזמנות שלא טופלו על ידי שליח 5, כולל אלה שלא היה בהן שליח בכלל.\"",
          "answer": 1207,
          "unit": "שורות",
          "hint": "זוכרים את 43, 1028 ו־1250 מפרק 5?",
          "solution": "SELECT *\nFROM orders\nWHERE courier_id <> 5\n   OR courier_id IS NULL",
          "note": "1028 ועוד 179 זה 1207. ועוד 43 של שליח 5 זה 1250."
        },
        {
          "q": "מנות טבעוניות שהן מנה ראשונה (`category_id = 1`) או תוספת (`category_id = 3`).<br>א: `category_id = 1 OR category_id = 3 AND is_vegan = 1`<br>ב: `(category_id = 1 OR category_id = 3) AND is_vegan = 1`",
          "answer": "ב",
          "label": "התנאי הנכון (א או ב)",
          "solution": "WHERE (category_id = 1 OR category_id = 3)\n  AND is_vegan = 1",
          "note": "ב מחזיר 51. א מחזיר 70: כל המנות הראשונות, טבעוניות או לא, ועוד התוספות הטבעוניות."
        }
      ]
    },
    {
      "n": 7,
      "title": "קיצורי דרך: IN, BETWEEN, LIKE",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_14_0",
      "deckPages": [
        62,
        70
      ],
      "practices": [
        {
          "id": "7-1",
          "kind": "lesson",
          "title": "נתרגל",
          "intro": "לכל בקשה כלי אחד מהפרק: IN, BETWEEN או LIKE, לפעמים עם NOT. כתבו את השאילתה ב־SSMS והקלידו כאן כמה שורות קיבלתם.",
          "questions": [
            {
              "q": "הכספים: \"כמה הזמנות שולמו בביט או Apple Pay?\" (`payment_method_id = 2`, `payment_method_id = 4`) (טבלה: `orders`)",
              "answer": 498,
              "unit": "שורות",
              "hint": "רשימה של שני ערכים בעמודה אחת.",
              "solution": "SELECT *\nFROM orders\nWHERE payment_method_id IN (2, 4)"
            },
            {
              "q": "הכספים: \"בכמה הזמנות לא השתמשו באחד מקופוני הקיץ (`coupon_id` 2 או 3)?\" האם התשובה כוללת הזמנות בלי קופון? (טבלה: `orders`)",
              "answer": 240,
              "unit": "שורות",
              "hint": "NOT IN.",
              "solution": "SELECT *\nFROM orders\nWHERE coupon_id NOT IN (2, 3)",
              "note": "240 לא כולל 991 הזמנות שבהן coupon_id ריק. כדי לכלול אותן מוסיפים OR coupon_id IS NULL ומקבלים 1231."
            },
            {
              "q": "מנהלת התפעול: \"כמה משלוחים לקחו בין 30 ל־45 דקות?\" (טבלה: `orders`)",
              "answer": 558,
              "unit": "שורות",
              "solution": "SELECT *\nFROM orders\nWHERE delivery_minutes BETWEEN 30 AND 45"
            },
            {
              "q": "צוות האפליקציה: \"אילו סלטים יש בתפריט?\" (כל מנה שבשם שלה מופיעה המילה Salad) (טבלה: `menu_items`)",
              "answer": 13,
              "unit": "שורות",
              "solution": "SELECT *\nFROM menu_items\nWHERE item_name LIKE '%Salad%'"
            }
          ]
        },
        {
          "id": "7-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 7",
          "intro": "הנהלת FoodRush מכינה את תוכנית העבודה לרבעון הבא, וכמה מחלקות פנו אליכם עם שאלות. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "הנחה על מנות במחיר בינוני־גבוה",
              "context": "צוות התמחור שוקל הנחה על מנות שעולות בין 50 ל־60 שקל, ולפני שמחליטים ההנהלה רוצה לדעת כמה מנות זה בכלל.",
              "task": "מצאו את כל המנות בטבלת menu_items שהמחיר שלהן בין 50 ל־60 שקל, כולל 50 וכולל 60.",
              "explain": "כמה מנות יושפעו מההנחה, ואיזה חלק הן מכל 207 המנות בתפריט (באחוזים או במילים, למשל \"בערך אחת מכל עשר\"). האם לדעתכם זו החלטה גדולה או קטנה?",
              "answer": 28,
              "label": "כמה מנות",
              "solution": "SELECT *\nFROM menu_items\nWHERE price BETWEEN 50 AND 60",
              "note": "28 מנות, בערך 14% מהתפריט: בערך מנה אחת מכל שבע. תשובה טובה מציינת גם את המספר וגם את החלק היחסי."
            },
            {
              "title": "מתי לתגבר שליחים",
              "context": "לרכזת השליחים יש תקציב לתגבר רק אחת משתי שעות העומס, צהריים או ערב, והיא רוצה להחליט לפי הנתונים ולא לפי תחושה.",
              "task": "ספרו כמה הזמנות נכנסו בין 12:00 ל־14:00, וכמה הזמנות נכנסו בין 19:00 ל־21:00 (העמודה order_time). כל טווח בשאילתה נפרדת.",
              "explain": "כמה הזמנות היו בכל טווח, איזה טווח עמוס יותר ובכמה (למשל \"פי 2\" או \"בערך 100 הזמנות יותר\"), ומה אתם ממליצים לרכזת.",
              "answer": [
                274,
                406
              ],
              "label": "שני מספרים: צהריים, ערב",
              "solution": "SELECT *\nFROM orders\nWHERE order_time BETWEEN '12:00' AND '14:00'\n\nSELECT *\nFROM orders\nWHERE order_time BETWEEN '19:00' AND '21:00'",
              "note": "274 בצהריים, 406 בערב. בערב נכנסות בערך פי 1.5 הזמנות, ולכן כדאי לתגבר בערב."
            },
            {
              "title": "האם קופוני הקיץ הצליחו",
              "context": "השיווק צריך להחליט אם להשיק שוב את שני קופוני הקיץ (coupon_id 2 ו־3), ורוצה לדעת כמה השתמשו בהם בהשוואה לכל השימושים בקופונים.",
              "task": "ספרו בכמה הזמנות השתמשו באחד משני קופוני הקיץ. אחר כך ספרו בכמה הזמנות השתמשו בקופון כלשהו.",
              "explain": "שני המספרים, איזה חלק מכל השימושים בקופונים הם קופוני הקיץ, והאם הייתם ממליצים להשיק אותם שוב.",
              "answer": [
                19,
                259
              ],
              "label": "שני מספרים: קופוני קיץ, כל הקופונים",
              "hint": "הזמנה שהשתמשו בה בקופון היא הזמנה שבה coupon_id לא ריק.",
              "solution": "SELECT *\nFROM orders\nWHERE coupon_id IN (2, 3)\n\nSELECT *\nFROM orders\nWHERE coupon_id IS NOT NULL",
              "note": "19 מתוך 259, כ־7% מהשימושים בקופונים. קופוני הקיץ כמעט לא שימשו לקוחות."
            },
            {
              "title": "מסנן \"סלטים\" באפליקציה",
              "context": "צוות האפליקציה יוסיף כפתור סינון \"סלטים\" רק אם הוא יציג מספיק מנות ממספיק מסעדות שונות.",
              "task": "מצאו את כל המנות שבשם שלהן מופיעה המילה Salad. אחר כך מצאו מכמה מסעדות שונות הן מגיעות.",
              "explain": "כמה מנות יופיעו במסנן, מכמה מסעדות, ומה זה אומר על המבחר שהלקוח יראה. האם כדאי להוסיף את הכפתור?",
              "answer": [
                13,
                13
              ],
              "label": "שני מספרים: מנות, מסעדות",
              "hint": "כדי לספור כל מסעדה פעם אחת: DISTINCT מפרק 4.",
              "solution": "SELECT *\nFROM menu_items\nWHERE item_name LIKE '%Salad%'\n\nSELECT DISTINCT restaurant_id\nFROM menu_items\nWHERE item_name LIKE '%Salad%'",
              "note": "13 מנות ב־13 מסעדות: בכל מסעדה שיש בה סלט יש סלט אחד בלבד. המסנן יציג מבחר רחב של מסעדות."
            },
            {
              "title": "האם הביטולים במרץ חריגים",
              "context": "במרץ 2026 בוטלו 5 הזמנות, ומנהלת השירות רוצה לדעת אם זה חריג בהשוואה לפברואר.",
              "task": "ספרו כמה הזמנות בוטלו בפברואר 2026. אחר כך ספרו כמה הזמנות היו בסך הכול בפברואר 2026, וכמה במרץ 2026.",
              "explain": "כמה ביטולים היו בכל חודש ומתוך כמה הזמנות, איזה אחוז מההזמנות בוטל בכל חודש, והאם לדעתכם מרץ חריג.",
              "answer": [
                4,
                77,
                83
              ],
              "label": "שלושה מספרים: ביטולים בפברואר, הזמנות בפברואר, הזמנות במרץ",
              "solution": "SELECT *\nFROM orders\nWHERE order_status = 'Cancelled'\n  AND order_date BETWEEN '20260201' AND '20260228'\n\nSELECT *\nFROM orders\nWHERE order_date BETWEEN '20260201' AND '20260228'\n\nSELECT *\nFROM orders\nWHERE order_date BETWEEN '20260301' AND '20260331'",
              "note": "פברואר: 4 ביטולים מתוך 77 (כ־5%). מרץ: 5 מתוך 83 (כ־6%). ההבדל קטן, ולכן מרץ לא חריג. תשובה טובה משווה אחוזים ולא רק מספרים."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "השיווק: \"אילו מסעדות הן איטלקיות (`cuisine_id = 2`) או יפניות (`cuisine_id = 3`)?\"",
          "answer": 7,
          "unit": "שורות",
          "solution": "SELECT *\nFROM restaurants\nWHERE cuisine_id IN (2, 3)"
        },
        {
          "q": "השיווק: \"כמה לקוחות הצטרפו במהלך 2025?\"",
          "answer": 54,
          "unit": "שורות",
          "hint": "העמודה join_date. תאריכים בפורמט 'YYYYMMDD'.",
          "solution": "SELECT *\nFROM customers\nWHERE join_date BETWEEN '20250101' AND '20251231'"
        },
        {
          "q": "שירות הלקוחות: \"אילו ביקורות מתלוננות על איטיות?\" (המילה slow בטקסט)",
          "answer": 34,
          "unit": "שורות",
          "hint": "העמודה review_text.",
          "solution": "SELECT *\nFROM reviews\nWHERE review_text LIKE '%slow%'",
          "note": "review_text = 'slow' היה מחזיר 0 שורות. צריך LIKE עם %."
        },
        {
          "q": "השיווק: \"לאילו לקוחות יש טלפון שלא מתחיל ב־054?\"",
          "answer": 127,
          "unit": "שורות",
          "solution": "SELECT *\nFROM customers\nWHERE phone NOT LIKE '054%'",
          "note": "18 ועוד 127 זה 145, ולא 160. 15 הלקוחות בלי טלפון לא עוברים אף תנאי."
        },
        {
          "q": "איזה כלי? השליחים שהתקבלו לעבודה במהלך 2024",
          "answer": 4,
          "unit": "שורות",
          "hint": "העמודה hire_date.",
          "solution": "SELECT *\nFROM couriers\nWHERE hire_date BETWEEN '20240101' AND '20241231'",
          "note": "הכלי: BETWEEN"
        },
        {
          "q": "איזה כלי? הלקוחות ששם המשפחה שלהם Cohen או Levi",
          "answer": 14,
          "unit": "שורות",
          "solution": "SELECT *\nFROM customers\nWHERE last_name IN ('Cohen', 'Levi')",
          "note": "הכלי: IN"
        },
        {
          "q": "איזה כלי? הקופונים של הקיץ (כל קוד שמתחיל ב־SUMMER)",
          "answer": 2,
          "unit": "שורות",
          "hint": "העמודה coupon_code.",
          "solution": "SELECT *\nFROM coupons\nWHERE coupon_code LIKE 'SUMMER%'",
          "note": "הכלי: LIKE"
        },
        {
          "q": "איזה כלי? מנות שעולות בין 20 ל־25 שקל",
          "answer": 31,
          "unit": "שורות",
          "solution": "SELECT *\nFROM menu_items\nWHERE price BETWEEN 20 AND 25",
          "note": "הכלי: BETWEEN"
        },
        {
          "q": "איזה כלי? ההזמנות שבוטלו במסעדות 1 ו־2",
          "answer": 3,
          "unit": "שורות",
          "solution": "SELECT *\nFROM orders\nWHERE restaurant_id IN (1, 2)\n  AND order_status = 'Cancelled'",
          "note": "הכלי: IN עם AND. עם IN אין צורך בסוגריים."
        },
        {
          "q": "איזה כלי? הזמנות צהריים: בין 12:00 ל־14:00",
          "answer": 274,
          "unit": "שורות",
          "hint": "העמודה order_time.",
          "solution": "SELECT *\nFROM orders\nWHERE order_time BETWEEN '12:00' AND '14:00'",
          "note": "הכלי: BETWEEN. הקצוות כלולים."
        },
        {
          "q": "איזה כלי? ביקורות עם דירוג 1 או 2",
          "answer": 8,
          "unit": "שורות",
          "hint": "העמודה rating.",
          "solution": "SELECT *\nFROM reviews\nWHERE rating IN (1, 2)",
          "note": "הכלי: IN. גם rating <= 2 נכון."
        }
      ]
    },
    {
      "n": 8,
      "title": "מיון ודירוג: ORDER BY, TOP",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_14_95",
      "deckPages": [
        71,
        81
      ],
      "practices": [
        {
          "id": "8-1",
          "kind": "lesson",
          "title": "תרגול: דירוגים",
          "intro": "לכל בקשה: מיון, ולפעמים TOP. לפני שכותבים: מה קורה בתיקו?",
          "questions": [
            {
              "q": "מנהלת התפעול: \"מה חמשת המשלוחים הארוכים ביותר?\" (טבלה: `orders`)",
              "answer": 159,
              "label": "מספר ההזמנה בשורה הראשונה",
              "hint": "העמודה delivery_minutes.",
              "solution": "SELECT TOP 5 order_id, delivery_minutes\nFROM orders\nORDER BY delivery_minutes DESC",
              "note": "הראשון: הזמנה 159, 69 דקות. המשלוח החמישי והשישי באורכם הם שניהם 61 דקות (הזמנות 260 ו־404). TOP 5 חותך אחד מהם. עם WITH TIES מתקבלות 6 שורות."
            },
            {
              "q": "הכספים: \"תראו לי את כל ההזמנות שקיבלו את הטיפ הגבוה ביותר.\" כמה הזמנות כאלה יש? (טבלה: `orders`)",
              "answer": 122,
              "unit": "שורות",
              "hint": "כמה הזמנות קיבלו את הטיפ הגבוה ביותר? אולי יותר מאחת.",
              "solution": "SELECT TOP 1 WITH TIES order_id, tip\nFROM orders\nORDER BY tip DESC",
              "note": "122 הזמנות, כולן עם טיפ 20.00. בלי WITH TIES, TOP 10 מחזיר עשר הזמנות כלשהן מתוך 122. \"הכי גבוה\" לא תמיד אומר שורה אחת."
            },
            {
              "q": "המנהל של Nonna Rina (מסעדה 2): \"חמש ההזמנות האחרונות שלי, מהחדשה לישנה.\" (טבלה: `orders`)",
              "answer": 39,
              "label": "מספר ההזמנה בשורה הראשונה",
              "solution": "SELECT TOP 5 order_id, order_date, order_time\nFROM orders\nWHERE restaurant_id = 2\nORDER BY order_date DESC, order_time DESC",
              "note": "הראשונה: הזמנה 39, 2026-06-24. להזמנות 87 ו־18 אותו תאריך, 2026-05-08. בלי order_time במיון, הסדר ביניהן לא מובטח."
            },
            {
              "q": "משאבי אנוש: \"רשימת השליחים לפי ותק, מהוותיק לחדש.\" (טבלה: `couriers`)",
              "answer": 2,
              "label": "מספר השליח בשורה הראשונה",
              "hint": "העמודה hire_date.",
              "solution": "SELECT courier_id, first_name, last_name, hire_date\nFROM couriers\nORDER BY hire_date",
              "note": "25 שורות. הראשונה: שליחה 2, Yael Mizrahi, התקבלה ב־2021-01-10. הוותיק ביותר הוא זה שהתאריך שלו הכי מוקדם, ולכן מיון עולה."
            }
          ]
        },
        {
          "id": "8-2",
          "kind": "lesson",
          "title": "נבאו את התוצאה",
          "intro": "מה תחזיר כל שאילתה? כתבו את התשובה לפני שמריצים.",
          "questions": [
            {
              "q": "`SELECT TOP 1 item_name, price FROM menu_items ORDER BY price`",
              "solution": "SELECT TOP 1 item_name, price\nFROM menu_items\nORDER BY price",
              "note": "Cola, 9.00. המנה הזולה ביותר."
            },
            {
              "q": "`SELECT TOP 1 order_id, tip FROM orders ORDER BY tip`",
              "solution": "SELECT TOP 1 order_id, tip\nFROM orders\nORDER BY tip",
              "note": "הזמנה כלשהי עם tip ריק (NULL). NULL ראשון במיון עולה. איזו הזמנה? אי אפשר לדעת: יש 179 שורות עם NULL ואין מיון שני."
            },
            {
              "q": "`SELECT TOP 1 restaurant_name, opened_date FROM restaurants ORDER BY opened_date`",
              "solution": "SELECT TOP 1 restaurant_name, opened_date\nFROM restaurants\nORDER BY opened_date",
              "note": "Wadi Falafel, 2014-05-05. המסעדה הוותיקה ביותר."
            },
            {
              "q": "`SELECT TOP 1 first_name, last_name FROM customers ORDER BY last_name DESC, first_name`",
              "solution": "SELECT TOP 1 first_name, last_name\nFROM customers\nORDER BY last_name DESC, first_name",
              "note": "Noa Weiss. Weiss אחרון באלף־בית, ובתוכו Noa ראשונה. ב־Weiss יש שישה לקוחות, ושניים מהם בשם Rivka."
            },
            {
              "q": "`SELECT TOP 1 WITH TIES order_id, delivery_minutes FROM orders ORDER BY delivery_minutes DESC`",
              "solution": "SELECT TOP 1 WITH TIES order_id, delivery_minutes\nFROM orders\nORDER BY delivery_minutes DESC",
              "note": "הזמנה 159, 69 דקות. שורה אחת בלבד, כי אין תיקו במקום הראשון. לעומת זאת, בטיפים (בתרגול) אותה שאילתה מחזירה 122 שורות."
            },
            {
              "q": "`SELECT TOP 3 item_name, price FROM menu_items WHERE restaurant_id = 2 ORDER BY price DESC`",
              "solution": "SELECT TOP 3 item_name, price\nFROM menu_items\nWHERE restaurant_id = 2\nORDER BY price DESC",
              "note": "Pasta Arrabbiata 69.00, Pizza Funghi 65.00, Lasagna 62.00. שלוש המנות היקרות ב־Nonna Rina."
            }
          ]
        },
        {
          "id": "8-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 8",
          "intro": "כמה מחלקות ב־FoodRush צריכות לדעת מי \"הכי\": הכי מהיר, הכי זול, הכי חדש. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "פרס למשלוח המהיר ביותר",
              "context": "רכזת השליחים רוצה לתת פרס לשליח שביצע את המשלוח המהיר ביותר, ולפני שהיא מכריזה היא רוצה לדעת אם יש זוכה אחד.",
              "task": "מטבלת orders הציגו את `order_id`, `courier_id`, `delivery_minutes` ו־tip של המשלוחים שזמן המשלוח שלהם הוא הקצר ביותר. רק הזמנות שהיה בהן משלוח (`delivery_minutes` לא ריק). אם יש תיקו, כל ההזמנות בתיקו צריכות להופיע.",
              "explain": "מה זמן המשלוח הקצר ביותר, כמה משלוחים הגיעו אליו, והאם אפשר לתת פרס לשליח אחד. בנוסף: בכמה מהמשלוחים האלה השליח לא קיבל טיפ, ומה זה אומר על הקשר בין מהירות לטיפ.",
              "answer": [
                17,
                10
              ],
              "label": "שני מספרים: כמה משלוחים בתיקו, בכמה מהם טיפ 0",
              "hint": "TOP 1 WITH TIES. ומה יקרה במיון עולה אם לא מסננים את ה־NULL?",
              "solution": "SELECT TOP 1 WITH TIES order_id, courier_id, delivery_minutes, tip\nFROM orders\nWHERE delivery_minutes IS NOT NULL\nORDER BY delivery_minutes",
              "note": "17 משלוחים של 12 דקות, של 12 שליחים שונים, ולכן אין זוכה אחד. ב־10 מהם הטיפ הוא 0: משלוח מהיר לא מבטיח טיפ. בלי ה־WHERE מתקבלות 179 שורות של NULL, כי NULL ראשון במיון עולה. שימו לב: אם מוסיפים tip ל־ORDER BY, התיקו נבדק על שתי העמודות ומתקבלות רק 10 שורות. תשובה טובה מציעה כלל אחר לפרס (למשל לכל ה־17, או לפי מדד אחר)."
            },
            {
              "title": "המסעדות האיטיות במטבח",
              "context": "מנהלת התפעול רוצה לפגוש את שלוש המסעדות שמכינות את האוכל הכי לאט, כדי לשפר את זמני ההכנה.",
              "task": "מטבלת restaurants הציגו את `restaurant_id`, `restaurant_name` ו־`avg_prep_minutes` של שלוש המסעדות עם זמן ההכנה הארוך ביותר, כולל מסעדות בתיקו במקום האחרון. אחר כך מצאו את המסעדה עם זמן ההכנה הקצר ביותר.",
              "explain": "כמה מסעדות צריך להזמין לפגישה ולמה זה לא בדיוק שלוש, מה זמני ההכנה שלהן, ובכמה הן איטיות מהמסעדה המהירה ביותר (למשל \"פי 3\").",
              "answer": [
                4,
                22,
                6
              ],
              "label": "שלושה מספרים: כמה מסעדות, זמן ההכנה הארוך, זמן ההכנה הקצר",
              "solution": "SELECT TOP 3 WITH TIES restaurant_id, restaurant_name, avg_prep_minutes\nFROM restaurants\nORDER BY avg_prep_minutes DESC\n\nSELECT TOP 1 restaurant_name, avg_prep_minutes\nFROM restaurants\nORDER BY avg_prep_minutes",
              "note": "4 מסעדות: Spice Route (22), Masala Express (21), Nonna Rina ו־Tokyo Gate (20 שתיהן). בלי WITH TIES אחת מהשתיים האחרונות הייתה נחתכת. הקצרה: Gelato Gardens, 6 דקות. 22 הוא כמעט פי 4 מ־6. תשובה טובה מסבירה למה מזמינים ארבע ולא שלוש."
            },
            {
              "title": "קמפיין \"ארוחה זולה\"",
              "context": "השיווק מתכנן קמפיין שמציג באפליקציה את חמש המנות הזולות ביותר, ורוצה לבדוק אם אלה בכלל מנות שאפשר לקרוא להן ארוחה.",
              "task": "מטבלת `menu_items` הציגו את `item_name`, price ו־`category_id` של חמש המנות הזולות ביותר, כולל תיקו במקום האחרון. אחר כך אותה שאילתה, בלי משקאות (`category_id = 5` הוא משקאות).",
              "explain": "מה מופיע ברשימה הראשונה, ומה זה אומר על הקמפיין. מה מופיע ברשימה השנייה, והאם גם היא מתאימה לקמפיין של ארוחה. מה אתם ממליצים לשיווק.",
              "answer": [
                6,
                6
              ],
              "label": "שני מספרים: שורות בשאילתה הראשונה, שורות בשנייה",
              "hint": "קטגוריות: 1 ראשונות, 2 עיקריות, 3 תוספות, 4 קינוחים, 5 משקאות.",
              "solution": "SELECT TOP 5 WITH TIES item_name, price, category_id\nFROM menu_items\nORDER BY price\n\nSELECT TOP 5 WITH TIES item_name, price, category_id\nFROM menu_items\nWHERE category_id <> 5\nORDER BY price",
              "note": "ברשימה הראשונה 6 שורות (ארבע מנות עולות 11.00), וכולן משקאות: Cola, Turkish Coffee, Green Tea. בשנייה 6 שורות של תוספות וראשונות: אורז, Miso Soup. אף אחת מהן לא ארוחה. תשובה טובה ממליצה לבנות את הקמפיין על מנות עיקריות (category_id = 2), או לשנות את הרעיון."
            },
            {
              "title": "הביקורות הגרועות ביותר",
              "context": "שירות הלקוחות רוצה ללמוד מהביקורות עם הדירוג הנמוך ביותר מה צריך לשפר.",
              "task": "מטבלת reviews הציגו את `review_id`, `order_id`, rating, `review_text` ו־`review_date` של כל הביקורות עם הדירוג הנמוך ביותר.",
              "explain": "מה הדירוג הנמוך ביותר, כמה ביקורות קיבלו אותו מתוך 470, ובכמה מהן הלקוח כתב טקסט. מה אפשר ללמוד מהן, ומה אתם ממליצים לשנות כדי לדעת יותר.",
              "answer": [
                8,
                1
              ],
              "label": "שני מספרים: כמה ביקורות, בכמה מהן יש טקסט",
              "solution": "SELECT TOP 1 WITH TIES review_id, order_id, rating, review_text, review_date\nFROM reviews\nORDER BY rating",
              "note": "הדירוג הנמוך הוא 2, ואין אף ביקורת עם 1. 8 ביקורות מתוך 470, פחות מ־2%. רק באחת יש טקסט: Arrived cold. משבע האחרות אי אפשר ללמוד כלום. תשובה טובה ממליצה, למשל, לבקש סיבה מלקוח שנותן דירוג נמוך."
            },
            {
              "title": "שליחים חדשים",
              "context": "משאבי אנוש בונה תוכנית חונכות לשליחים שהתקבלו לעבודה מתחילת 2024, ורוצה לדעת כמה חונכים צריך.",
              "task": "מטבלת couriers הציגו את `courier_id`, `first_name`, `last_name` ו־`hire_date` של השליחים שהתקבלו לעבודה מ־1 בינואר 2024, מהחדש לוותיק.",
              "explain": "כמה שליחים חדשים יש ואיזה חלק הם מ־25 השליחים. מתי התקבל השליח החדש ביותר, ומתי זה שלפניו. מה הפער ביניהם אומר על הגיוס בחברה.",
              "answer": 5,
              "label": "כמה שליחים",
              "solution": "SELECT courier_id, first_name, last_name, hire_date\nFROM couriers\nWHERE hire_date >= '20240101'\nORDER BY hire_date DESC",
              "note": "5 שליחים, 20% מהשליחים. החדש: Yonatan Biton, 2026-05-01. לפניו: Rana Segal, 2024-12-03. כמעט שנה וחצי בלי גיוס. תשובה טובה מציינת את הפער ושואלת אם החברה מגייסת מספיק."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "השיווק: \"מי הלקוח הראשון שהצטרף ל־FoodRush?\"",
          "answer": 92,
          "label": "מספר הלקוח",
          "hint": "העמודה join_date.",
          "solution": "SELECT TOP 1 customer_id, first_name, last_name, join_date\nFROM customers\nORDER BY join_date",
          "note": "לקוח 92, Natan Biton, הצטרף ב־2023-01-02."
        },
        {
          "q": "המטבח: \"אילו מנות לא זמינות עכשיו? מהיקרה לזולה.\"",
          "answer": 9,
          "unit": "שורות",
          "hint": "העמודה is_available.",
          "solution": "SELECT item_name, price\nFROM menu_items\nWHERE is_available = 0\nORDER BY price DESC",
          "note": "הראשונה: Bean Burrito, 56.00."
        },
        {
          "q": "רכזת המסעדות: \"איזו מסעדה הצטרפה אחרונה?\" בדקו גם כמה הזמנות יש לה. (פתרו בשני שלבים)",
          "answer": [
            30,
            0
          ],
          "label": "שני מספרים: מספר המסעדה, כמה הזמנות",
          "hint": "העמודה opened_date.",
          "solution": "SELECT TOP 1 restaurant_id, restaurant_name, opened_date\nFROM restaurants\nORDER BY opened_date DESC\n\nSELECT *\nFROM orders\nWHERE restaurant_id = 30",
          "note": "Lev Hamifratz Diner (30), נפתחה ב־2026-07-01, יום אחרי סוף הנתונים. לכן אין לה הזמנות."
        }
      ]
    },
    {
      "n": 9,
      "title": "פונקציות: סוגרים חשבונות פתוחים",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_17_0",
      "deckPages": [
        82,
        96
      ],
      "practices": [
        {
          "id": "9-1",
          "kind": "lesson",
          "title": "תרגול: בקשות מהצוות",
          "intro": "לכל בקשה פונקציה אחת או שתיים מהפרק. כתבו את השאילתה ב־SSMS והקלידו כאן כמה שורות קיבלתם.",
          "questions": [
            {
              "q": "מערכת ה־SMS: \"אני צריכה מספרי טלפון בלי מקף, רק ללקוחות שיש להם טלפון.\" (טבלה: `customers`)",
              "answer": 145,
              "unit": "שורות",
              "solution": "SELECT customer_id,\n       REPLACE(phone, '-', '') AS sms_phone\nFROM customers\nWHERE phone IS NOT NULL",
              "note": "בלי ה־WHERE מתקבלות 160 שורות, ו־15 מהן NULL. REPLACE על NULL מחזיר NULL."
            },
            {
              "q": "מוקד השירות: \"לכל הזמנה, תווית בפורמט `order 6: Picked Up`.\" (טבלה: `orders`)",
              "answer": 1250,
              "unit": "שורות",
              "hint": "order_id הוא מספר. איזו פונקציה מחברת טקסט ומספר בלי שגיאה?",
              "solution": "SELECT order_id,\n       CONCAT('order ', order_id, ': ', order_status) AS order_label\nFROM orders",
              "note": "CONCAT חוסך את ה־CAST. גם זה נכון: 'order ' + CAST(order_id AS VARCHAR(10)) + ': ' + order_status."
            },
            {
              "q": "העיצוב: \"לאילו לקוחות יש שם משפחה ארוך מ־6 תווים?\" (טבלה: `customers`)",
              "answer": 42,
              "unit": "שורות",
              "hint": "העמודה last_name.",
              "solution": "SELECT customer_id, first_name, last_name\nFROM customers\nWHERE LEN(last_name) > 6"
            },
            {
              "q": "מנהלת התפעול: \"זמן המשלוח בשעות, עם שתי ספרות אחרי הנקודה, רק להזמנות שנמסרו.\" (טבלה: `orders`)",
              "answer": 1071,
              "unit": "שורות",
              "hint": "60 או 60.0? זוכרים מה קרה בפרק 3?",
              "solution": "SELECT order_id,\n       CAST(delivery_minutes / 60.0 AS DECIMAL(5,2)) AS hours\nFROM orders\nWHERE delivery_minutes IS NOT NULL",
              "note": "גם ROUND(delivery_minutes / 60.0, 2) נכון. ההבדל רק בתצוגת האפסים. גם WHERE order_status = 'Delivered' מחזיר 1071."
            }
          ]
        },
        {
          "id": "9-2",
          "kind": "lesson",
          "title": "נבאו את התוצאה",
          "intro": "מה תחזיר כל שאילתה? כתבו את התשובה לפני שמריצים.",
          "questions": [
            {
              "q": "`SELECT 'Tip: ' + CAST(tip AS VARCHAR(10)) FROM orders WHERE order_id = 6`",
              "solution": "SELECT 'Tip: ' + CAST(tip AS VARCHAR(10))\nFROM orders\nWHERE order_id = 6",
              "note": "NULL. הטיפ של הזמנה 6 הוא NULL, ו־+ עם NULL נותן NULL."
            },
            {
              "q": "`SELECT CONCAT('Tip: ', tip) FROM orders WHERE order_id = 6`",
              "solution": "SELECT CONCAT('Tip: ', tip)\nFROM orders\nWHERE order_id = 6",
              "note": "Tip: (בלי מספר). CONCAT מתייחס ל־NULL כטקסט ריק."
            },
            {
              "q": "`SELECT LEN(restaurant_name) FROM restaurants WHERE restaurant_id = 1`",
              "solution": "SELECT LEN(restaurant_name)\nFROM restaurants\nWHERE restaurant_id = 1",
              "note": "12. Shuk Kitchen: 11 אותיות ורווח אחד."
            }
          ]
        },
        {
          "id": "9-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 9",
          "intro": "כמה מחלקות ב־FoodRush צריכות לנקות, לחשב או לעגל נתונים לפני שהן מחליטות. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "תשלום לשליחים בהזמנות בלי משלוח",
              "context": "הכספים רוצים לשלם לשליחים לפי הנוסחה \"דמי משלוח ועוד טיפ\", ולפני כן הם רוצים לבדוק מה הנוסחה נותנת בהזמנות שלא היה בהן משלוח.",
              "task": "מטבלת orders הציגו את `order_id`, `order_status`, `delivery_fee`, tip, ועמודה `courier_total` שהיא `delivery_fee` ועוד tip, כשטיפ ריק נחשב 0. רק הזמנות שלא היה בהן משלוח (`delivery_minutes` ריק), מהסכום הגבוה לנמוך. אחר כך ספרו בכמה מההזמנות האלה `courier_total` גדול מ־0.",
              "explain": "בכמה הזמנות לא היה משלוח, בכמה מהן הנוסחה בכל זאת נותנת לשליח כסף, ומה הסטטוס של ההזמנות האלה. האם לדעתכם נכון לשלם עליהן, ומה צריך לשנות בנוסחה.",
              "answer": [
                179,
                72
              ],
              "label": "שני מספרים: הזמנות בלי משלוח, מהן עם סכום גדול מ־0",
              "hint": "בלי ISNULL הסכום יוצא NULL בכל השורות האלה.",
              "solution": "SELECT order_id, order_status, delivery_fee, tip,\n       delivery_fee + ISNULL(tip, 0) AS courier_total\nFROM orders\nWHERE delivery_minutes IS NULL\nORDER BY courier_total DESC\n\nSELECT order_id, order_status,\n       delivery_fee + ISNULL(tip, 0) AS courier_total\nFROM orders\nWHERE delivery_minutes IS NULL\n  AND delivery_fee + ISNULL(tip, 0) > 0",
              "note": "179 הזמנות בלי משלוח. ב־72 מהן, כולן Cancelled, הנוסחה נותנת 9.90 עד 17.90, כי דמי המשלוח רשומים גם בהזמנה שבוטלה. ב־107 האחרות (Picked Up) הסכום 0. תשובה טובה ממליצה לשלם רק על הזמנות שנמסרו, או לבדוק למה נרשמים דמי משלוח בביטול."
            },
            {
              "title": "שם המסעדה בשעון של השליח",
              "context": "צוות האפליקציה בונה מסך לשעון החכם של השליחים, שבו נכנסים רק 12 התווים הראשונים של שם המסעדה.",
              "task": "מטבלת restaurants הציגו את `restaurant_name`, את מספר התווים בשם, ואת 12 התווים הראשונים של השם כפי שיופיעו בשעון. רק מסעדות שהשם שלהן ארוך מ־12 תווים, מהשם הארוך לקצר.",
              "explain": "כמה מסעדות ייחתכו ואיזה חלק הן מ־30 המסעדות. תנו שתי דוגמאות לשם חתוך, והאם השליח עדיין יזהה את המסעדה. מה אתם ממליצים לצוות.",
              "answer": 11,
              "label": "כמה מסעדות",
              "solution": "SELECT restaurant_name,\n       LEN(restaurant_name) AS name_length,\n       LEFT(restaurant_name, 12) AS watch_name\nFROM restaurants\nWHERE LEN(restaurant_name) > 12\nORDER BY name_length DESC",
              "note": "11 מתוך 30, יותר משליש. למשל Lev Hamifratz Diner הופך ל־Lev Hamifrat, ו־Kaze Sushi Bar ל־Kaze Sushi B. רוב השמות עדיין מזוהים, אבל נראים שבורים. תשובה טובה מציעה שם קצר מיוחד לשעון, או מסך רחב יותר."
            },
            {
              "title": "הנחה של 15% ומחיר עגול",
              "context": "השיווק שוקל הנחה של 15% על כל התפריט, עם מחיר מעוגל לשקל שלם, ורוצה לדעת כמה מנות ייכנסו בעקבותיה למסנן \"עד 30 שקל\" באפליקציה.",
              "task": "ספרו כמה מנות ב־`menu_items` עולות היום פחות מ־30 שקל. אחר כך ספרו כמה מנות יעלו פחות מ־30 שקל אחרי ההנחה, כשהמחיר אחרי ההנחה מעוגל לשקל שלם (price כפול 0.85, מעוגל ל־0 ספרות אחרי הנקודה).",
              "explain": "כמה מנות במסנן היום וכמה אחרי ההנחה, כמה מנות נוספות, ואיזה חלק מ־207 המנות זה בכל מצב. האם ההנחה משנה את התמונה באפליקציה.",
              "answer": [
                86,
                108
              ],
              "label": "שני מספרים: היום, אחרי ההנחה",
              "hint": "ROUND עם 0 מעגל לשקל שלם. כתבו את החישוב גם ב־WHERE, לא את הכינוי.",
              "solution": "SELECT item_name, price\nFROM menu_items\nWHERE price < 30\n\nSELECT item_name, price,\n       ROUND(price * 0.85, 0) AS new_price\nFROM menu_items\nWHERE ROUND(price * 0.85, 0) < 30",
              "note": "86 מנות היום (כ־42%), 108 אחרי ההנחה (כ־52%): 22 מנות נוספות, ויותר ממחצית התפריט נכנס למסנן. בלי ROUND מתקבלות 114, כי מנה של 35 שקל יוצאת 29.75, ומעוגלת ל־30. תשובה טובה משווה אחוזים ולא רק מספרים."
            },
            {
              "title": "משלוחים של יותר משלושת רבעי שעה",
              "context": "מנהלת התפעול קיבלה דוח שלפיו רק 9 משלוחים לקחו יותר מ־0.75 שעה, והיא רוצה לדעת אם המספר נכון לפני שהיא מציגה אותו להנהלה.",
              "task": "מטבלת orders הציגו את `order_id`, `delivery_minutes`, וזמן המשלוח בשעות עם שתי ספרות אחרי הנקודה. רק משלוחים שזמן המשלוח שלהם בשעות גדול מ־0.75. אחר כך הריצו את אותו תנאי עם `delivery_minutes` / 60 (בלי .0) והשוו.",
              "explain": "כמה משלוחים באמת לקחו יותר מ־0.75 שעה, ואיזה חלק הם מ־1071 המשלוחים. מאיפה הגיע המספר 9 בדוח, במילים פשוטות. מה אתם אומרים למנהלת.",
              "answer": [
                177,
                9
              ],
              "label": "שני מספרים: התשובה הנכונה, התשובה עם 60",
              "solution": "SELECT order_id, delivery_minutes,\n       ROUND(delivery_minutes / 60.0, 2) AS hours\nFROM orders\nWHERE ROUND(delivery_minutes / 60.0, 2) > 0.75\n\nSELECT order_id, delivery_minutes\nFROM orders\nWHERE delivery_minutes / 60 > 0.75",
              "note": "177 משלוחים, כ־17%: בערך אחד מכל שישה. עם / 60 החלוקה שלמה: כל משלוח מתחת ל־60 דקות נותן 0, ורק 9 המשלוחים של 60 דקות ומעלה נותנים 1. הדוח טעה פי 20 בגלל חלוקה שלמה. גם delivery_minutes > 45 מחזיר 177."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "המטבח: \"המדפסת במטבח מדפיסה רק אותיות גדולות. תנו לי את שמות המנות באותיות גדולות.\"",
          "answer": 207,
          "unit": "שורות",
          "solution": "SELECT item_id,\n       UPPER(item_name) AS print_name\nFROM menu_items"
        },
        {
          "q": "הקבלה: \"ראשי תיבות לכל לקוח, למשל OM עבור Omer Mizrahi.\"",
          "answer": 160,
          "unit": "שורות",
          "solution": "SELECT customer_id,\n       LEFT(first_name, 1) + LEFT(last_name, 1) AS initials\nFROM customers"
        },
        {
          "q": "השיווק: \"לקוחות שהקידומת שלהם 054.\" פתרו עם LEFT",
          "answer": 18,
          "unit": "שורות",
          "solution": "SELECT customer_id, first_name, phone\nFROM customers\nWHERE LEFT(phone, 3) = '054'",
          "note": "18 לקוחות, כמו phone LIKE '054%' בפרק 7. שתי דרכים לאותה שאלה."
        },
        {
          "q": "נציג השליחים: \"כמה קיבל שליח 7 בכל הזמנה, כולל טיפ?\"",
          "answer": 36,
          "unit": "שורות",
          "hint": "העמודות delivery_fee ו־tip.",
          "solution": "SELECT order_id,\n       delivery_fee + ISNULL(tip, 0) AS courier_total\nFROM orders\nWHERE courier_id = 7",
          "note": "אצל שליח 7 יש רק משלוחים, ולכן אין NULL בטיפ. ISNULL לא מזיק, אבל כאן הוא לא משנה כלום."
        },
        {
          "q": "`SELECT CONCAT('Tip: ', tip) FROM orders WHERE order_id = 5`",
          "solution": "SELECT CONCAT('Tip: ', tip)\nFROM orders\nWHERE order_id = 5",
          "note": "Tip: 10.00. הטיפ הוא DECIMAL(6,2), ולכן מופיעות שתי ספרות אחרי הנקודה."
        },
        {
          "q": "`SELECT order_id, ISNULL(delivery_fee, 0) FROM orders` (בכמה שורות התוצאה שונה מ־`delivery_fee`?)",
          "solution": "SELECT order_id, ISNULL(delivery_fee, 0)\nFROM orders",
          "note": "0 שורות. ב־delivery_fee אין NULL בכלל (NOT NULL), ולכן ISNULL לא משנה כלום. בהזמנה 6 delivery_fee הוא 0.00, לא NULL."
        },
        {
          "q": "`SELECT ROUND(delivery_minutes / 60, 2) FROM orders WHERE order_id = 159`",
          "solution": "SELECT ROUND(delivery_minutes / 60, 2)\nFROM orders\nWHERE order_id = 159",
          "note": "1. 69 / 60 היא חלוקה שלמה, והתוצאה 1. העיגול מגיע מאוחר מדי. עם 60.0 התוצאה הייתה 1.150000."
        },
        {
          "q": "`SELECT CAST(delivery_fee AS INT) FROM orders WHERE order_id = 5`",
          "solution": "SELECT CAST(delivery_fee AS INT)\nFROM orders\nWHERE order_id = 5",
          "note": "12. CAST ל־INT חותך את 12.90, לא מעגל. לעומת זאת, CAST ל־DECIMAL עם פחות ספרות מעגל."
        }
      ]
    },
    {
      "n": 10,
      "title": "תאריכים",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_17_101",
      "deckPages": [
        97,
        101
      ],
      "practices": [
        {
          "id": "10-1",
          "kind": "lesson",
          "title": "תרגול: בקשות מהצוות",
          "intro": "בכל החישובים השתמשו בתאריך סוף הנתונים, '20260630', ולא בתאריך של היום.",
          "questions": [
            {
              "q": "הנהלת החברה: \"כמה הזמנות היו במרץ 2026?\" (טבלה: `orders`)",
              "answer": 83,
              "unit": "שורות",
              "solution": "SELECT order_id, order_date\nFROM orders\nWHERE YEAR(order_date) = 2026\n  AND MONTH(order_date) = 3",
              "note": "מי שכותב רק MONTH(order_date) = 3 יקבל 140: מרץ 2025 ומרץ 2026 יחד."
            },
            {
              "q": "מנהל המשמרות: \"כמה הזמנות היו בימי שני?\" (טבלה: `orders`)",
              "answer": 178,
              "unit": "שורות",
              "solution": "SELECT order_id, order_date\nFROM orders\nWHERE DATENAME(WEEKDAY, order_date) = 'Monday'",
              "note": "התשובה תלויה בשפת השרת. בשרת בשפה אחרת 'Monday' יחזיר 0 שורות, בלי שגיאה."
            },
            {
              "q": "הכספים: \"כמה ימים כל קופון בתוקף?\" (`valid_from`, `valid_to`) כמה ימים יצאו ל־HANUKKAH10? (טבלה: `coupons`)",
              "answer": 8,
              "label": "הערך שקיבלתם ל־HANUKKAH10",
              "solution": "SELECT coupon_code,\n       DATEDIFF(DAY, valid_from, valid_to) AS valid_days\nFROM coupons",
              "note": "8 שורות. DATEDIFF ב־DAY סופר חצות. HANUKKAH10 בתוקף מ־14 עד 22 בדצמבר, כלומר 9 ימים בלוח, ו־DATEDIFF מחזיר 8. איזו תשובה נכונה עסקית?"
            },
            {
              "q": "מנהלת התפעול: \"אילו הזמנות היו בשבוע האחרון של הנתונים, מ־23 ביוני 2026?\" השתמשו ב־DATEADD. (טבלה: `orders`)",
              "answer": 20,
              "unit": "שורות",
              "solution": "SELECT order_id, order_date\nFROM orders\nWHERE order_date >= DATEADD(DAY, -7, '20260630')",
              "note": "DATEADD(DAY, -7, '20260630') הוא 2026-06-23. היתרון של DATEADD: מחליפים תאריך אחד, והחישוב מתעדכן."
            }
          ]
        },
        {
          "id": "10-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 10",
          "intro": "הנהלת FoodRush מסכמת את חצי השנה האחרונה, וכמה מחלקות צריכות חישובי תאריכים. בכל החישובים השתמשו בתאריך סוף הנתונים, '20260630'. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "מענק לשליחים ותיקים",
              "context": "משאבי אנוש רוצים לתת מענק לכל שליח שעובד בחברה לפחות 5 שנים שלמות ב־30 ביוני 2026, והתקציב תלוי במספר השליחים.",
              "task": "מטבלת couriers הציגו את `courier_id`, `first_name`, `last_name` ו־`hire_date` של השליחים שלפי DATEDIFF ב־YEAR עובדים 5 שנים או יותר. אחר כך מצאו את השליחים שהתקבלו לעבודה ב־30 ביוני 2021 או לפני כן (חשבו את התאריך עם DATEADD).",
              "explain": "כמה שליחים מקבלים מענק לפי כל אחת משתי השאילתות, למה המספרים שונים, ואיזה מספר צריך להיכנס לתקציב.",
              "answer": [
                8,
                3
              ],
              "label": "שני מספרים: לפי DATEDIFF, לפי DATEADD",
              "hint": "DATEDIFF סופר כמה פעמים עברנו את 1 בינואר, לא כמה שנים שלמות עברו.",
              "solution": "SELECT courier_id, first_name, last_name, hire_date\nFROM couriers\nWHERE DATEDIFF(YEAR, hire_date, '20260630') >= 5\n\nSELECT courier_id, first_name, last_name, hire_date\nFROM couriers\nWHERE hire_date <= DATEADD(YEAR, -5, '20260630')",
              "note": "DATEDIFF מחזיר 8: כל מי שהתקבל ב־2021. אבל רק 3 התקבלו עד 30 ביוני 2021 (Yael Mizrahi, Adi Avraham, Rivka Ben David). חמשת האחרים יגיעו ל־5 שנים רק בהמשך השנה. בתקציב צריך 3. תשובה טובה מסבירה את ההבדל בלי מונחי SQL."
            },
            {
              "title": "האם החברה גדלה",
              "context": "הנהלת החברה צריכה להחליט אם לגייס שליחים נוספים, ורוצה לדעת אם מספר ההזמנות גדל לעומת השנה שעברה.",
              "task": "ספרו כמה הזמנות היו בחצי הראשון של 2025 (ינואר עד יוני), וכמה בחצי הראשון של 2026. השתמשו ב־YEAR וב־MONTH.",
              "explain": "שני המספרים, בכמה גדל או קטן מספר ההזמנות (במספר ובאחוזים), ומה אתם ממליצים להנהלה לגבי גיוס שליחים.",
              "answer": [
                345,
                470
              ],
              "label": "שני מספרים: חצי ראשון 2025, חצי ראשון 2026",
              "solution": "SELECT order_id, order_date\nFROM orders\nWHERE YEAR(order_date) = 2025\n  AND MONTH(order_date) <= 6\n\nSELECT order_id, order_date\nFROM orders\nWHERE YEAR(order_date) = 2026\n  AND MONTH(order_date) <= 6",
              "note": "345 מול 470: 125 הזמנות יותר, גידול של כ־36%. משווים תקופות באותו אורך ובאותה עונה, ולכן ההשוואה הוגנת. תשובה טובה ממליצה לבחון גיוס, וכדאי לחבר לשאלה על השליחים החדשים בפרק 8: כמעט שנה וחצי בלי גיוס."
            },
            {
              "title": "איזה קופון לחדש",
              "context": "השיווק יכול לחדש רק אחד משני קופונים, FRIDAY25 (25% הנחה, `coupon_id` 6) או STUDENT12 (12% הנחה, `coupon_id` 7), ורוצה לבחור את זה שלקוחות השתמשו בו יותר.",
              "task": "מטבלת coupons חשבו לכל אחד משני הקופונים כמה ימים הוא היה בתוקף (DATEDIFF ב־DAY בין `valid_from` ל־`valid_to`). מטבלת orders ספרו בכמה הזמנות השתמשו בכל אחד מהם.",
              "explain": "כמה זמן כל קופון היה בתוקף וכמה פעמים השתמשו בו. השוו לפי שימושים בחודש (בערך 30 ימים), כי התקופות לא באותו אורך. איזה קופון אתם ממליצים לחדש, ומה מפתיע בתוצאה.",
              "answer": [
                91,
                14,
                302,
                79
              ],
              "label": "ארבעה מספרים: ימים FRIDAY25, הזמנות FRIDAY25, ימים STUDENT12, הזמנות STUDENT12",
              "hint": "את השימושים בחודש מחשבים במחשבון או בעמודה מחושבת. זכרו 1.0 כדי לא לקבל חלוקה שלמה.",
              "solution": "SELECT coupon_code,\n       DATEDIFF(DAY, valid_from, valid_to) AS valid_days\nFROM coupons\nWHERE coupon_id IN (6, 7)\n\nSELECT order_id, coupon_id\nFROM orders\nWHERE coupon_id = 6\n\nSELECT order_id, coupon_id\nFROM orders\nWHERE coupon_id = 7",
              "note": "FRIDAY25: 14 הזמנות ב־91 ימים, בערך 4.6 בחודש. STUDENT12: 79 הזמנות ב־302 ימים, בערך 7.8 בחודש. הקופון עם ההנחה הקטנה יותר שימש בערך פי 1.7 יותר. תשובה טובה ממליצה לחדש את STUDENT12, ומסבירה שהשוואה של 14 מול 79 בלי אורך התקופה לא הוגנת."
            },
            {
              "title": "כמה לקוחות בגיל סטודנטים",
              "context": "השיווק שוקל להפוך את STUDENT12 לקמפיין קבוע לגילאי 18 עד 25, ורוצה לדעת כמה לקוחות בגילאים האלה.",
              "task": "מטבלת customers הציגו את `customer_id`, `first_name` ו־`birth_date` של הלקוחות שב־30 ביוני 2026 הם בני 18 עד 25 בדיוק: נולדו אחרי `DATEADD(YEAR, -26, '20260630')` ולא אחרי `DATEADD(YEAR, -18, '20260630')`. מיינו מהצעיר למבוגר.",
              "explain": "כמה לקוחות בקהל היעד, ואיזה חלק הם מ־160 הלקוחות. האם הקהל גדול מספיק לקמפיין קבוע, ומה עוד הייתם רוצים לבדוק לפני שמחליטים.",
              "answer": 29,
              "label": "כמה לקוחות",
              "hint": "DATEADD(YEAR, -26, '20260630') הוא 30 ביוני 2000. מי שנולד בדיוק בו כבר בן 26.",
              "solution": "SELECT customer_id, first_name, birth_date\nFROM customers\nWHERE birth_date > DATEADD(YEAR, -26, '20260630')\n  AND birth_date <= DATEADD(YEAR, -18, '20260630')\nORDER BY birth_date DESC",
              "note": "29 לקוחות, כ־18%: כמעט אחד מכל חמישה. אין לקוחות מתחת לגיל 18 (הצעיר נולד ב־2007-08-07). עם DATEDIFF(YEAR, birth_date, '20260630') BETWEEN 18 AND 25 מתקבלות 28, כי DATEDIFF סופר גבולות. תשובה טובה מציינת את החלק היחסי, ומציעה לבדוק כמה הזמנות הם עושים (פרקים הבאים)."
            },
            {
              "title": "הצטרפות של לקוחות חדשים",
              "context": "השיווק חושד שמשהו בתהליך ההרשמה לאפליקציה הפסיק לעבוד, ורוצה לבדוק כמה לקוחות חדשים הצטרפו בכל חצי שנה.",
              "task": "ספרו כמה לקוחות הצטרפו (`join_date`) בחצי הראשון של 2025, בחצי השני של 2025, ובחצי הראשון של 2026. השתמשו ב־YEAR וב־MONTH. אחר כך מצאו את תאריך ההצטרפות האחרון בטבלה.",
              "explain": "שלושת המספרים, איך הם משתנים, ומתי הצטרף הלקוח האחרון. השוו למספר ההזמנות שגדל (שאלה \"האם החברה גדלה\"). מה אתם ממליצים לשיווק לבדוק.",
              "answer": [
                36,
                18,
                2
              ],
              "label": "שלושה מספרים: חצי ראשון 2025, חצי שני 2025, חצי ראשון 2026",
              "hint": "לתאריך האחרון: TOP 1 עם ORDER BY מפרק 8.",
              "solution": "SELECT customer_id, join_date\nFROM customers\nWHERE YEAR(join_date) = 2025\n  AND MONTH(join_date) <= 6\n\nSELECT customer_id, join_date\nFROM customers\nWHERE YEAR(join_date) = 2025\n  AND MONTH(join_date) >= 7\n\nSELECT customer_id, join_date\nFROM customers\nWHERE YEAR(join_date) = 2026\n  AND MONTH(join_date) <= 6\n\nSELECT TOP 1 customer_id, join_date\nFROM customers\nORDER BY join_date DESC",
              "note": "36, 18, 2: ירידה חדה, מ־36 ל־18, ואז ל־2 בלבד. הלקוח האחרון (110) הצטרף ב־2026-01-04, ומאז, כמעט חצי שנה, אין הצטרפויות. באותו זמן ההזמנות גדלו ב־36%: הלקוחות הקיימים מזמינים יותר, אבל אין חדשים. תשובה טובה ממליצה לבדוק את תהליך ההרשמה מיד."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "השיווק: \"אילו לקוחות הצטרפו במהלך 2025?\" (`join_date`)",
          "answer": 54,
          "unit": "שורות",
          "solution": "SELECT customer_id, first_name, join_date\nFROM customers\nWHERE YEAR(join_date) = 2025"
        },
        {
          "q": "השיווק: \"לאילו לקוחות יש יום הולדת ביוני? נשלח להם קופון.\" (`birth_date`)",
          "answer": 11,
          "unit": "שורות",
          "solution": "SELECT customer_id, first_name, birth_date\nFROM customers\nWHERE MONTH(birth_date) = 6"
        },
        {
          "q": "מוקד השירות: \"אילו קופונים היו בתוקף ב־30 ביוני 2026?\" (רמז: בדקו את תאריך תחילת התוקף וסיום התוקף)",
          "answer": 4,
          "unit": "שורות",
          "hint": "אפשר לשים ערך קבוע משמאל, ואת העמודות בתוך BETWEEN.",
          "solution": "SELECT coupon_code\nFROM coupons\nWHERE '20260630' BETWEEN valid_from AND valid_to",
          "note": "WELCOME20, SUMMER26, LUNCH10, STUDENT12. STUDENT12 נכנס כי הקצה כלול."
        },
        {
          "q": "השיווק: \"אילו לקוחות איתנו 36 חודשים או יותר?\" (נכון ל־30/6/2026)",
          "answer": 26,
          "unit": "שורות",
          "solution": "SELECT customer_id, first_name, join_date\nFROM customers\nWHERE DATEDIFF(MONTH, join_date, '20260630') >= 36",
          "note": "מי שהצטרף עד יוני 2023. DATEDIFF סופר גבולות של חודש, ולכן זה מספר מקורב, לא מדויק ביום."
        },
        {
          "q": "`SELECT order_id FROM orders WHERE order_date BETWEEN '20260228' AND '20260201'`",
          "solution": "SELECT order_id\nFROM orders\nWHERE order_date BETWEEN '20260201' AND '20260228'",
          "note": "0 שורות, בלי שגיאה. BETWEEN לא מתקן את הסדר בעצמו. הקטן קודם, ומתקבלות 77."
        },
        {
          "q": "`SELECT order_id FROM orders WHERE order_date = '31/12/2025'`",
          "solution": "SELECT order_id\nFROM orders\nWHERE order_date = '20251231'",
          "note": "שגיאה: Conversion failed when converting date and/or time from character string. בשרת באנגלית אמריקאית אין חודש 31. בפורמט 'YYYYMMDD' מתקבלות 2 הזמנות (249 ו־488)."
        },
        {
          "q": "`SELECT order_id FROM orders WHERE order_date = 20251231`",
          "solution": "SELECT order_id\nFROM orders\nWHERE order_date = '20251231'",
          "note": "שגיאה. בלי גרשיים 20251231 הוא מספר שלם, והשרת לא ממיר INT ל־DATE. התיקון: גרשיים."
        },
        {
          "q": "`SELECT customer_id, DATEDIFF(MONTH, '20260630', join_date) AS tenure_months FROM customers`",
          "solution": "SELECT customer_id,\n       DATEDIFF(MONTH, join_date, '20260630') AS tenure_months\nFROM customers",
          "note": "160 שורות, בלי שגיאה, וכל המספרים שליליים (לקוח 1: מינוס 25). התיקון: להחליף את סדר התאריכים, ההתחלה קודם."
        },
        {
          "q": "`SELECT order_id FROM orders WHERE MONTH(order_date) = 'March'`",
          "solution": "SELECT order_id\nFROM orders\nWHERE MONTH(order_date) = 3",
          "note": "שגיאה: Conversion failed when converting the varchar value 'March' to data type int. MONTH מחזיר מספר. התיקון מחזיר 140. גם DATENAME(MONTH, order_date) = 'March' עובד."
        },
        {
          "q": "`SELECT coupon_code, DATEADD(7, DAY, valid_to) AS new_valid_to FROM coupons`",
          "solution": "SELECT coupon_code,\n       DATEADD(DAY, 7, valid_to) AS new_valid_to\nFROM coupons",
          "note": "שגיאה. ב־DATEADD היחידה באה ראשונה, ואחריה המספר."
        }
      ]
    },
    {
      "n": 11,
      "title": "CASE",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_17_178",
      "deckPages": [
        102,
        108
      ],
      "practices": [
        {
          "id": "11-1",
          "kind": "lesson",
          "title": "תרגול: בקשות מהצוות",
          "intro": "כל בקשה דורשת CASE אחד. לפני שמריצים: כמה שורות יחזרו?",
          "questions": [
            {
              "q": "הכספים: \"לכל הזמנה, תסמנו 'No delivery' אם לא היה משלוח, 'No tip' אם היה משלוח בלי טיפ, ו־'Tip' אם היה טיפ.\" (`tip`) (טבלה: `orders`)",
              "answer": 1250,
              "unit": "שורות",
              "solution": "SELECT order_id,\n       tip,\n       CASE\n           WHEN tip IS NULL THEN 'No delivery'\n           WHEN tip = 0 THEN 'No tip'\n           ELSE 'Tip'\n       END AS tip_label\nFROM orders",
              "note": "179 No delivery, 381 No tip, 690 Tip. אם שוכחים את IS NULL, 179 ההזמנות בלי משלוח נופלות ל־'Tip'."
            },
            {
              "q": "צוות האפליקציה: \"לכל הזמנה, 'Lunch' אם היא נכנסה לפני 17:00, ו־'Dinner' אחרת.\" (`order_time`) (טבלה: `orders`)",
              "answer": 1250,
              "unit": "שורות",
              "solution": "SELECT order_id,\n       order_time,\n       CASE\n           WHEN order_time < '17:00' THEN 'Lunch'\n           ELSE 'Dinner'\n       END AS meal\nFROM orders",
              "note": "377 Lunch, 873 Dinner."
            },
            {
              "q": "המטבח: \"רק המנות הטבעוניות. ליד כל אחת: 'Available' או 'Out of stock'.\" (`is_vegan`, `is_available`) (טבלה: `menu_items`)",
              "answer": 96,
              "unit": "שורות",
              "solution": "SELECT item_id,\n       item_name,\n       CASE\n           WHEN is_available = 1 THEN 'Available'\n           ELSE 'Out of stock'\n       END AS stock_status\nFROM menu_items\nWHERE is_vegan = 1",
              "note": "89 Available, 7 Out of stock. WHERE מסנן שורות, CASE רק מסמן אותן."
            },
            {
              "q": "שירות הלקוחות: \"לכל ביקורת: 'Positive' לדירוג 4 או 5, 'Neutral' ל־3, ו־'Negative' לכל השאר.\" (`rating`) (טבלה: `reviews`)",
              "answer": 470,
              "unit": "שורות",
              "solution": "SELECT review_id,\n       rating,\n       CASE\n           WHEN rating >= 4 THEN 'Positive'\n           WHEN rating = 3 THEN 'Neutral'\n           ELSE 'Negative'\n       END AS review_type\nFROM reviews",
              "note": "390 Positive, 72 Neutral, 8 Negative. אין בנתונים ביקורת עם דירוג 1, ולכן כל 8 ה־'Negative' הן דירוג 2."
            }
          ]
        },
        {
          "id": "11-2",
          "kind": "lesson",
          "title": "נבאו את התוצאה",
          "intro": "כל השאילתות רצות על הזמנה 6 של Inbar. הריצו פעם אחת שאילתה שתתן את כל נתוני ההזמנה. אחרי שתראו את נתוני ההזמנה, שערו מה תקבלו בשאילתות הבאות.",
          "questions": [
            {
              "q": "`SELECT CASE WHEN delivery_minutes > 45 THEN 'Slow' END AS speed FROM orders WHERE order_id = 6`",
              "solution": "SELECT CASE\n           WHEN delivery_minutes > 45 THEN 'Slow'\n       END AS speed\nFROM orders\nWHERE order_id = 6",
              "note": "NULL. אין ELSE, והתנאי לא מתקיים. שורה שלא עומדת באף WHEN ואין לה ELSE מקבלת NULL."
            },
            {
              "q": "`SELECT CASE WHEN tip = NULL THEN 'No delivery' ELSE 'Delivered' END AS status_check FROM orders WHERE order_id = 6`",
              "solution": "SELECT CASE\n           WHEN tip IS NULL THEN 'No delivery'\n           ELSE 'Delivered'\n       END AS status_check\nFROM orders\nWHERE order_id = 6",
              "note": "Delivered. tip = NULL אף פעם לא מתקיים, גם כש־tip הוא NULL. זו אותה טעות כמו phone = NULL מפרק 5. התיקון: IS NULL."
            },
            {
              "q": "`SELECT CASE WHEN order_status = 'Picked Up' THEN 'Pickup' WHEN tip IS NULL THEN 'No tip data' END AS label FROM orders WHERE order_id = 6`",
              "solution": "SELECT CASE\n           WHEN order_status = 'Picked Up' THEN 'Pickup'\n           WHEN tip IS NULL THEN 'No tip data'\n       END AS label\nFROM orders\nWHERE order_id = 6",
              "note": "Pickup. שני התנאים מתקיימים, ו־CASE עוצר בראשון."
            }
          ]
        },
        {
          "id": "11-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 11",
          "intro": "כמה מחלקות ב־FoodRush רוצות לתת שם לקבוצות בנתונים לפני שהן מחליטות. לכל שאלה כתבו שאילתה עם CASE, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "תגית \"הכנה ארוכה\" באפליקציה",
              "context": "צוות האפליקציה שוקל להציג ליד כל מסעדה תגית זמן הכנה, ורוצה לדעת אם התגית \"Long\" תופיע אצל מעט מסעדות או אצל רבות.",
              "task": "מטבלת restaurants הציגו את מספר המסעדה, השם, `avg_prep_minutes`, ועמודה `prep_label`: 'Quick' מתחת ל־12 דקות, 'Standard' מ־12 עד 18 דקות (כולל 18), ו־'Long' מעל 18 דקות. אחר כך ספרו כמה מסעדות קיבלו כל תגית, עם WHERE בשאילתה נפרדת לכל תגית.",
              "explain": "כמה מסעדות בכל תגית מתוך 30, איזה חלק מהמסעדות יקבל 'Long', והאם לדעתכם כדאי להציג את התגית.",
              "answer": [
                6,
                18,
                6
              ],
              "label": "שלושה מספרים: Quick, Standard, Long",
              "hint": "בתנאים של \"קטן מ\", כותבים קודם את הגבול הקטן.",
              "solution": "SELECT restaurant_id,\n       restaurant_name,\n       avg_prep_minutes,\n       CASE\n           WHEN avg_prep_minutes < 12 THEN 'Quick'\n           WHEN avg_prep_minutes <= 18 THEN 'Standard'\n           ELSE 'Long'\n       END AS prep_label\nFROM restaurants\n\nSELECT *\nFROM restaurants\nWHERE avg_prep_minutes < 12\n\nSELECT *\nFROM restaurants\nWHERE avg_prep_minutes BETWEEN 12 AND 18\n\nSELECT *\nFROM restaurants\nWHERE avg_prep_minutes > 18",
              "note": "6 Quick, 18 Standard, 6 Long. 'Long' תופיע אצל 6 מתוך 30 מסעדות, כלומר 20%, אחת מכל חמש. תשובה טובה אומרת שהתגית נדירה מספיק כדי להיות שימושית ללקוח, ולא תסמן חצי מהמסעדות."
            },
            {
              "title": "פיצוי על משלוח מאוחר",
              "context": "הכספים בודקים מדיניות פיצוי: החזר מלא של דמי המשלוח על משלוח של יותר משעה, וחצי החזר על משלוח של יותר מ־50 דקות ועד שעה.",
              "task": "מטבלת orders הציגו את מספר ההזמנה, `delivery_minutes`, `delivery_fee`, ועמודה refund: כל דמי המשלוח אם `delivery_minutes` גדול מ־60, חצי מדמי המשלוח אם הוא גדול מ־50 (ועד 60), ו־0 בכל מקרה אחר. מיינו מההחזר הגבוה לנמוך. אחר כך ספרו עם WHERE כמה הזמנות יקבלו החזר מלא, וכמה חצי החזר.",
              "explain": "כמה הזמנות יקבלו כל סוג החזר, איזה חלק הן מ־1071 המשלוחים, ומה ההמלצה: האם המדיניות תעלה הרבה או מעט.",
              "answer": [
                6,
                79
              ],
              "label": "שני מספרים: החזר מלא, חצי החזר",
              "hint": "בדקו מה קיבלו ההזמנות שבהן delivery_minutes הוא NULL. האם זה נכון עסקית?",
              "solution": "SELECT order_id,\n       delivery_minutes,\n       delivery_fee,\n       CASE\n           WHEN delivery_minutes > 60 THEN delivery_fee\n           WHEN delivery_minutes > 50 THEN delivery_fee / 2\n           ELSE 0\n       END AS refund\nFROM orders\nORDER BY refund DESC\n\nSELECT *\nFROM orders\nWHERE delivery_minutes > 60\n\nSELECT *\nFROM orders\nWHERE delivery_minutes > 50\n  AND delivery_minutes <= 60",
              "note": "6 החזרים מלאים ו־79 חצאי החזר: 85 מתוך 1071 משלוחים, כ־8%. ההזמנות בלי משלוח נופלות ל־ELSE ומקבלות 0, וכאן זה נכון. תשובה טובה מציינת שרוב הפיצויים הם חצי החזר, ושהמדיניות נוגעת בערך במשלוח אחד מכל 12."
            },
            {
              "title": "למי עונים על ביקורות",
              "context": "שירות הלקוחות רוצה לענות אישית לביקורות, ומבקש לדעת כמה עבודה זה ידרוש לפני שמחליטים כמה נציגים להקצות.",
              "task": "מטבלת reviews הציגו את מספר הביקורת, rating, `review_text`, ועמודה action: 'No action' אם אין טקסט, 'Reply' אם יש טקסט והדירוג 3 ומטה, ו־'Thank you' אם יש טקסט והדירוג 4 ומעלה. אחר כך ספרו עם WHERE כמה ביקורות קיבלו כל תווית.",
              "explain": "כמה ביקורות בכל תווית מתוך 470, כמה ביקורות באמת דורשות תשובה אישית, ומה ההמלצה: כמה נציגים צריך לזה.",
              "answer": [
                38,
                182,
                250
              ],
              "label": "שלושה מספרים: Reply, Thank you, No action",
              "hint": "סדר ה־WHEN חשוב: מה צריך לבדוק ראשון?",
              "solution": "SELECT review_id,\n       rating,\n       review_text,\n       CASE\n           WHEN review_text IS NULL THEN 'No action'\n           WHEN rating <= 3 THEN 'Reply'\n           ELSE 'Thank you'\n       END AS action\nFROM reviews\n\nSELECT *\nFROM reviews\nWHERE review_text IS NOT NULL\n  AND rating <= 3\n\nSELECT *\nFROM reviews\nWHERE review_text IS NOT NULL\n  AND rating >= 4\n\nSELECT *\nFROM reviews\nWHERE review_text IS NULL",
              "note": "38 Reply, 182 Thank you, 250 No action. יותר מחצי מהביקורות הן דירוג בלי טקסט. רק 38 ביקורות, כ־8%, דורשות תשובה אישית, ולכן נציג אחד מספיק. אם בודקים את הדירוג לפני NULL, ביקורות בלי טקסט מקבלות 'Reply' או 'Thank you' בטעות."
            },
            {
              "title": "קופון שישי שלא בשישי",
              "context": "השיווק השיק באביב 2025 את הקופון FRIDAY25 (`coupon_id` 6, הנחה של 25%) כדי להגדיל הזמנות בימי שישי, וצריך להחליט אם להשיק אותו שוב.",
              "task": "מטבלת orders, רק ההזמנות עם `coupon_id` 6: הציגו את מספר ההזמנה, `order_date`, שם היום, ועמודה `day_check`: 'Friday' אם ההזמנה הייתה ביום שישי, ו־'Other day' אחרת. אחר כך ספרו כמה הזמנות היו בכל תווית.",
              "explain": "בכמה הזמנות השתמשו בקופון, כמה מהן היו בשישי, ומה זה אומר על הקופון. האם הייתם משיקים אותו שוב כמו שהוא?",
              "answer": [
                2,
                12
              ],
              "label": "שני מספרים: Friday, Other day",
              "hint": "DATENAME(WEEKDAY, ...) מפרק 10.",
              "solution": "SELECT order_id,\n       order_date,\n       DATENAME(WEEKDAY, order_date) AS order_weekday,\n       CASE\n           WHEN DATENAME(WEEKDAY, order_date) = 'Friday' THEN 'Friday'\n           ELSE 'Other day'\n       END AS day_check\nFROM orders\nWHERE coupon_id = 6\n\nSELECT *\nFROM orders\nWHERE coupon_id = 6\n  AND DATENAME(WEEKDAY, order_date) = 'Friday'",
              "note": "14 הזמנות עם הקופון, ורק 2 מהן ביום שישי. 12 מתוך 14, כ־86%, היו בימים אחרים. הקופון לא השיג את המטרה שלו. תשובה טובה ממליצה להגביל אותו לימי שישי, או לא להשיק אותו שוב. שמות הימים באנגלית תלויים בשפת השרת: כדאי לבדוק במחשבי בית הספר."
            },
            {
              "title": "מענק ותק לשליחים",
              "context": "משאבי אנוש מתכננים מענק ותק לשליחים, וצריכים לדעת כמה שליחים יש בכל רמה כדי לבנות את התקציב.",
              "task": "מטבלת couriers הציגו לכל שליח את המספר, השם, `hire_date`, ותק בחודשים עד '20260630' (DATEDIFF), ועמודה bonus: 500 לשליח עם 48 חודשים ומעלה, 250 לשליח עם 24 עד 47 חודשים, ו־0 לשאר. אחר כך ספרו כמה שליחים יש בכל רמה.",
              "explain": "כמה שליחים בכל רמה, מה התקציב הכולל של המענק (חשבו ביד), ומה אתם ממליצים להנהלה.",
              "answer": [
                11,
                10,
                4
              ],
              "label": "שלושה מספרים: 500, 250, 0",
              "hint": "את החישוב של DATEDIFF אפשר לכתוב גם בתוך WHEN.",
              "solution": "SELECT courier_id,\n       first_name,\n       last_name,\n       hire_date,\n       DATEDIFF(MONTH, hire_date, '20260630') AS tenure_months,\n       CASE\n           WHEN DATEDIFF(MONTH, hire_date, '20260630') >= 48 THEN 500\n           WHEN DATEDIFF(MONTH, hire_date, '20260630') >= 24 THEN 250\n           ELSE 0\n       END AS bonus\nFROM couriers\n\nSELECT *\nFROM couriers\nWHERE DATEDIFF(MONTH, hire_date, '20260630') >= 48\n\nSELECT *\nFROM couriers\nWHERE DATEDIFF(MONTH, hire_date, '20260630') BETWEEN 24 AND 47",
              "note": "11 שליחים מקבלים 500, 10 מקבלים 250, ו־4 לא מקבלים מענק. התקציב: 11 כפול 500 ועוד 10 כפול 250, כלומר 8000 שקל. 21 מתוך 25 שליחים יקבלו מענק, ולכן תשובה טובה יכולה לשאול אם זה עדיין \"מענק ותק\" או כמעט מענק לכולם. אין שליח שהתחיל לעבוד קרוב לגבול של 24 או 48 חודשים, ולכן DATEDIFF לא משנה כאן את התוצאה."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "השיווק: \"לכל לקוח, תכתבו 'Email only' אם אין לו טלפון, ו־'Phone' אם יש.\"",
          "answer": 160,
          "unit": "שורות",
          "solution": "SELECT customer_id,\n       first_name,\n       CASE\n           WHEN phone IS NULL THEN 'Email only'\n           ELSE 'Phone'\n       END AS contact_type\nFROM customers",
          "note": "15 Email only, 145 Phone."
        },
        {
          "q": "רכזת השליחים: \"תסמנו 'Green' לשליחים על אופניים או אופניים חשמליים, ו־'Motor' לכל השאר.\" (`vehicle_type`)",
          "answer": 25,
          "unit": "שורות",
          "hint": "הערכים בעמודה הם 'Bicycle' ו־'e-Bike'. IN עובד גם בתוך WHEN.",
          "solution": "SELECT courier_id,\n       first_name,\n       CASE\n           WHEN vehicle_type IN ('Bicycle', 'e-Bike') THEN 'Green'\n           ELSE 'Motor'\n       END AS vehicle_group\nFROM couriers",
          "note": "6 Green, 19 Motor."
        },
        {
          "q": "השיווק: \"לכל לקוח, 'Gen Z' אם נולד בשנת 2000 או אחריה, ו־'Older' אחרת.\" (`birth_date`)",
          "answer": 160,
          "unit": "שורות",
          "hint": "YEAR מפרק 10.",
          "solution": "SELECT customer_id,\n       first_name,\n       CASE\n           WHEN YEAR(birth_date) >= 2000 THEN 'Gen Z'\n           ELSE 'Older'\n       END AS generation\nFROM customers",
          "note": "30 Gen Z, 130 Older."
        },
        {
          "q": "`SELECT CASE WHEN delivery_minutes IS NULL THEN 0 ELSE delivery_minutes END AS minutes FROM orders WHERE order_id = 6`",
          "solution": "SELECT CASE\n           WHEN delivery_minutes IS NULL THEN 0\n           ELSE delivery_minutes\n       END AS minutes\nFROM orders\nWHERE order_id = 6",
          "note": "0. זה בדיוק מה ש־ISNULL(delivery_minutes, 0) מפרק 9 עושה, בקיצור."
        },
        {
          "q": "`SELECT CASE WHEN delivery_minutes IS NULL THEN 'None' ELSE delivery_minutes END AS minutes FROM orders WHERE order_id = 6`",
          "solution": "SELECT CASE\n           WHEN delivery_minutes IS NULL THEN 'None'\n           ELSE CAST(delivery_minutes AS VARCHAR(10))\n       END AS minutes\nFROM orders\nWHERE order_id = 6",
          "note": "שגיאה: Conversion failed when converting the varchar value 'None' to data type int. כל הערכים בעמודה של CASE חייבים להיות מאותו סוג. התיקון: להפוך את המספר לטקסט עם CAST, כמו בפרק 9."
        }
      ]
    },
    {
      "n": 12,
      "title": "פונקציות סיכום",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_17_256",
      "deckPages": [
        109,
        116
      ],
      "practices": [
        {
          "id": "12-1",
          "kind": "lesson",
          "title": "תרגול: בקשות מהצוות",
          "intro": "כל בקשה מחזירה שורה אחת. לפני שמריצים: נחשו את התשובה בערך.",
          "questions": [
            {
              "q": "השיווק: \"בכמה הזמנות השתמשו בקופון?\" (טבלה: `orders`)",
              "answer": 259,
              "label": "הערך שקיבלתם",
              "solution": "SELECT COUNT(coupon_id) AS orders_with_coupon\nFROM orders",
              "note": "COUNT(coupon_id) מדלג על ההזמנות בלי קופון. COUNT(*) כאן היה מחזיר 1250, וזו טעות נפוצה."
            },
            {
              "q": "המטבח: \"מה המחיר של המנה הזולה ביותר בתפריט, ושל היקרה ביותר?\" (טבלה: `menu_items`)",
              "answer": [
                9,
                86
              ],
              "label": "שני מספרים: הזולה, היקרה",
              "solution": "SELECT MIN(price) AS min_price,\n       MAX(price) AS max_price\nFROM menu_items",
              "note": "9.00 ו־86.00."
            },
            {
              "q": "השיווק: \"מה המחיר הממוצע של מנה בתפריט? שתי ספרות אחרי הנקודה.\" (טבלה: `menu_items`)",
              "answer": 37.66,
              "label": "הערך שקיבלתם",
              "hint": "CAST ל־DECIMAL(5,2) מפרק 9.",
              "solution": "SELECT CAST(AVG(price) AS DECIMAL(5,2)) AS avg_price\nFROM menu_items",
              "note": "price הוא DECIMAL, ולכן AVG מחזיר כאן ערך עשרוני גם בלי * 1.0. הבעיה של הממוצע השלם קיימת רק בעמודות INT."
            },
            {
              "q": "שירות הלקוחות: \"מה הדירוג הממוצע בביקורות?\" הריצו פעם אחת עם `AVG(rating)`, ופעם בדרך שנותנת ממוצע מדויק. (טבלה: `reviews`)",
              "answer": [
                4,
                4.3
              ],
              "label": "שני מספרים: AVG(rating), הממוצע המדויק",
              "solution": "SELECT AVG(rating) AS avg_rating,\n       CAST(AVG(rating * 1.0) AS DECIMAL(3,2)) AS avg_rating_exact\nFROM reviews",
              "note": "rating הוא INT, ולכן AVG(rating) מחזיר 4. הממוצע האמיתי הוא 4.30."
            }
          ]
        },
        {
          "id": "12-2",
          "kind": "lesson",
          "title": "נבאו את התוצאה",
          "intro": "לכל שאילתה: מה התוצאה? כתבו לפני שמריצים.",
          "questions": [
            {
              "q": "`SELECT COUNT(tip) FROM orders WHERE order_status = 'Picked Up'`",
              "solution": "SELECT COUNT(tip)\nFROM orders\nWHERE order_status = 'Picked Up'",
              "note": "0. בכל ההזמנות האלה tip הוא NULL, ו־COUNT של עמודה מדלג על NULL."
            },
            {
              "q": "`SELECT SUM(tip) FROM orders WHERE order_status = 'Picked Up'`",
              "solution": "SELECT SUM(tip)\nFROM orders\nWHERE order_status = 'Picked Up'",
              "note": "NULL. אין אף ערך לסכם, ו־SUM לא מחזיר 0. כדי לקבל 0 כותבים ISNULL(SUM(tip), 0)."
            },
            {
              "q": "`SELECT COUNT(DISTINCT courier_id) FROM orders`",
              "solution": "SELECT COUNT(DISTINCT courier_id)\nFROM orders",
              "note": "24, לא 25. שליח 25, Yonatan Biton, התחיל לעבוד ב־2026-05-01 ועוד לא ביצע אף משלוח."
            }
          ]
        },
        {
          "id": "12-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 12",
          "intro": "כמה מחלקות ב־FoodRush צריכות מספר אחד או שניים כדי לקבל החלטה. לכל שאלה כתבו שאילתה עם פונקציות סיכום, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "כפתורי טיפ באפליקציה",
              "context": "צוות האפליקציה רוצה להוסיף כפתורי טיפ מוכנים, ומבקש לדעת כמה לקוחות נותנים טיפ ומה הסכום הרגיל.",
              "task": "בשאילתה אחת על טבלת orders: כמה משלוחים יש (הזמנות שבהן tip אינו NULL), בכמה מהם היה טיפ גדול מ־0, ומה הטיפ הממוצע רק במשלוחים שבהם היה טיפ, עם שתי ספרות אחרי הנקודה.",
              "explain": "איזה אחוז מהמשלוחים קיבלו טיפ, מה הטיפ הממוצע כשכבר נותנים טיפ, ואילו סכומים הייתם שמים על הכפתורים.",
              "answer": [
                1071,
                690,
                11.94
              ],
              "label": "שלושה מספרים: משלוחים, משלוחים עם טיפ, טיפ ממוצע",
              "hint": "SUM עם CASE סופר שורות לפי תנאי. CASE בלי ELSE מחזיר NULL, ו־AVG מדלג על NULL.",
              "solution": "SELECT COUNT(tip) AS deliveries,\n       SUM(CASE WHEN tip > 0 THEN 1 ELSE 0 END) AS tipped,\n       CAST(AVG(CASE WHEN tip > 0 THEN tip END) AS DECIMAL(5,2)) AS avg_tip_when_tipped\nFROM orders",
              "note": "690 מתוך 1071 משלוחים קיבלו טיפ, כ־64%. כשנותנים טיפ, הממוצע הוא 11.94 שקל. אפשר גם בשתי שאילתות: השנייה עם WHERE tip > 0. תשובה טובה מציעה כפתורים סביב 12 שקל, למשל 10, 12 ו־15, ומציינת שכשליש מהמשלוחים לא מקבלים טיפ בכלל."
            },
            {
              "title": "האם המשלוחים נהיו מהירים יותר",
              "context": "מנהלת התפעול צריכה להחליט אם לחדש את החוזה עם חברת הניווט שהוטמעה בתחילת 2026, ורוצה לדעת אם זמני המשלוח השתפרו מאז.",
              "task": "חשבו את זמן המשלוח הממוצע (`delivery_minutes`) ב־2025, ובשאילתה נפרדת ב־2026. הציגו כל ממוצע עם שתי ספרות אחרי הנקודה.",
              "explain": "שני הממוצעים, כמה השתנה זמן המשלוח, והאם לדעתכם זה מצדיק לחדש את החוזה.",
              "answer": [
                35.25,
                34.78
              ],
              "label": "שני מספרים: 2025, 2026",
              "hint": "delivery_minutes הוא INT. מה יחזיר AVG שלו?",
              "solution": "SELECT CAST(AVG(delivery_minutes * 1.0) AS DECIMAL(5,2)) AS avg_2025\nFROM orders\nWHERE YEAR(order_date) = 2025\n\nSELECT CAST(AVG(delivery_minutes * 1.0) AS DECIMAL(5,2)) AS avg_2026\nFROM orders\nWHERE YEAR(order_date) = 2026",
              "note": "35.25 דקות ב־2025, ו־34.78 ב־2026: שיפור של פחות מחצי דקה. בלי * 1.0 מתקבלים 35 ו־34, ונראה כאילו היה שיפור של דקה שלמה. תשובה טובה אומרת שאין שיפור ממשי, ולכן הנתונים לא מצדיקים את החוזה."
            },
            {
              "title": "להפסיק לקבל מזומן?",
              "context": "הכספים שוקלים להפסיק לקבל תשלום במזומן, כי הטיפול בו יקר, ורוצים לדעת כמה לקוחות זה ישפיע עליהם.",
              "task": "בשאילתה אחת על טבלת orders: כמה הזמנות יש בסך הכול, וכמה מהן שולמו במזומן (`payment_method_id = 5`).",
              "explain": "כמה הזמנות שולמו במזומן, איזה אחוז הן מכל ההזמנות, והאם לדעתכם אפשר להפסיק לקבל מזומן.",
              "answer": [
                1250,
                58
              ],
              "label": "שני מספרים: כל ההזמנות, במזומן",
              "solution": "SELECT COUNT(*) AS all_orders,\n       SUM(CASE WHEN payment_method_id = 5 THEN 1 ELSE 0 END) AS cash_orders\nFROM orders",
              "note": "58 מתוך 1250 הזמנות, כ־4.6%: פחות מהזמנה אחת מכל עשרים. אפשר גם בשתי שאילתות עם WHERE. תשובה טובה אומרת שההשפעה קטנה, ויכולה להמליץ להודיע ללקוחות מראש. פרט מעניין למורה: אף הזמנה במזומן לא בוטלה."
            },
            {
              "title": "מבצע \"טבעוני וזול\"",
              "context": "השיווק רוצה לפרסם קמפיין שאומר שאוכל טבעוני אצלנו זול יותר, וצריך לבדוק שזה נכון לפני שהקמפיין עולה.",
              "task": "חשבו את המחיר הממוצע של מנה טבעונית (`is_vegan = 1`), ובשאילתה נפרדת את המחיר הממוצע של מנה לא טבעונית. שתי ספרות אחרי הנקודה. הוסיפו לכל שאילתה גם את מספר המנות.",
              "explain": "שני הממוצעים, כמה זול יותר בממוצע מנה טבעונית (בשקלים או באחוזים), והאם המסר של הקמפיין נכון.",
              "answer": [
                28.38,
                45.68
              ],
              "label": "שני מספרים: ממוצע טבעוני, ממוצע לא טבעוני",
              "solution": "SELECT COUNT(*) AS vegan_items,\n       CAST(AVG(price) AS DECIMAL(5,2)) AS avg_vegan_price\nFROM menu_items\nWHERE is_vegan = 1\n\nSELECT COUNT(*) AS other_items,\n       CAST(AVG(price) AS DECIMAL(5,2)) AS avg_other_price\nFROM menu_items\nWHERE is_vegan = 0",
              "note": "96 מנות טבעוניות במחיר ממוצע 28.38, ו־111 מנות אחרות במחיר ממוצע 45.68. מנה טבעונית זולה בממוצע בכ־17 שקל, כ־38%. המסר נכון. תשובה טובה מוסיפה שכמעט חצי מהתפריט טבעוני, כך שיש מבחר."
            },
            {
              "title": "משלוח חינם עם קופון",
              "context": "השיווק מציע לתת משלוח חינם לכל הזמנה עם קופון, והכספים רוצים לדעת כמה מהכנסות דמי המשלוח זה יעלה.",
              "task": "חשבו את סכום דמי המשלוח (`delivery_fee`) בהזמנות שבהן השתמשו בקופון, ובשאילתה נפרדת את סכום דמי המשלוח בכל ההזמנות.",
              "explain": "כמה כסף מדמי משלוח מגיע מהזמנות עם קופון, איזה חלק זה מכל דמי המשלוח, והאם הייתם ממליצים על ההצעה.",
              "answer": [
                3179.9,
                15710.7
              ],
              "label": "שני מספרים: עם קופון, כל ההזמנות",
              "solution": "SELECT SUM(delivery_fee) AS coupon_fees\nFROM orders\nWHERE coupon_id IS NOT NULL\n\nSELECT SUM(delivery_fee) AS all_fees\nFROM orders",
              "note": "3179.90 מתוך 15710.70, כ־20%. ההצעה תוותר על חמישית מהכנסות דמי המשלוח, נוסף על ההנחה של הקופון עצמו. תשובה טובה מציינת את החלק היחסי ושוקלת אם המחיר מוצדק."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "הנהלת החברה: \"כמה מסעדות שונות קיבלו לפחות הזמנה אחת?\"",
          "answer": 29,
          "label": "הערך שקיבלתם",
          "solution": "SELECT COUNT(DISTINCT restaurant_id) AS restaurants_with_orders\nFROM orders",
          "note": "יש 30 מסעדות, ורק 29 קיבלו הזמנות. מי המסעדה החסרה? את הכלי למצוא אותה נלמד בפרק 16."
        },
        {
          "q": "הכספים: \"כמה גבינו בדמי משלוח, בסך הכול?\" (`delivery_fee`)",
          "answer": 15710.7,
          "label": "הערך שקיבלתם",
          "solution": "SELECT SUM(delivery_fee) AS total_fees\nFROM orders",
          "note": "גם הזמנות שבוטלו נושאות דמי משלוח בנתונים. עם WHERE order_status = 'Delivered' מתקבל 14747.90."
        },
        {
          "q": "מנהלת התפעול: \"מה המשלוח הארוך ביותר מתחילת 2026?\"",
          "answer": 63,
          "label": "הערך שקיבלתם",
          "solution": "SELECT MAX(delivery_minutes) AS longest_2026\nFROM orders\nWHERE order_date >= '20260101'",
          "note": "63 דקות. בכל התקופה המשלוח הארוך ביותר היה 69 דקות, ב־2025."
        },
        {
          "q": "מנהלת התפעול, בשאילתה אחת: \"כמה משלוחים מהירים (מתחת ל־30 דקות) היו, וכמה הזמנות בלי משלוח?\" רמז: CASE בתוך SUM.",
          "answer": [
            336,
            179
          ],
          "label": "שני מספרים: מהירים, בלי משלוח",
          "hint": "CASE מפרק 11 בתוך SUM.",
          "solution": "SELECT SUM(CASE WHEN delivery_minutes < 30 THEN 1 ELSE 0 END) AS fast_count,\n       SUM(CASE WHEN delivery_minutes IS NULL THEN 1 ELSE 0 END) AS no_delivery_count\nFROM orders",
          "note": "CASE מחזיר 1 או 0 לכל שורה, ו־SUM סופר את האחדות. אלה אותם 336 ו־179 מפרק 11, הפעם בשאילתה אחת."
        },
        {
          "q": "`SELECT COUNT(*) FROM orders WHERE order_status = 'Picked Up'`",
          "solution": "SELECT COUNT(*)\nFROM orders\nWHERE order_status = 'Picked Up'",
          "note": "107: ההזמנות שנאספו מהמסעדה."
        },
        {
          "q": "`SELECT MIN(order_status) FROM orders`",
          "solution": "SELECT MIN(order_status)\nFROM orders",
          "note": "Cancelled. MIN על טקסט מחזיר את הראשון לפי סדר האלף־בית."
        },
        {
          "q": "`SELECT AVG(rating) FROM reviews`",
          "solution": "SELECT AVG(rating)\nFROM reviews",
          "note": "4. rating הוא INT, והממוצע נחתך. הממוצע האמיתי הוא בערך 4.30."
        }
      ]
    },
    {
      "n": 13,
      "title": "GROUP BY",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_19_0",
      "deckPages": [
        117,
        126
      ],
      "practices": [
        {
          "id": "13-1",
          "kind": "lesson",
          "title": "תרגול: בקשות מהצוות",
          "intro": "לפני כל שאילתה: כמה שורות יחזרו?",
          "questions": [
            {
              "q": "המטבח: \"לכל קטגוריית מנות: כמה מנות יש, ומה המחיר הזול והיקר בה?\" (`category_id`) (טבלה: `menu_items`)",
              "answer": 5,
              "unit": "שורות",
              "solution": "SELECT category_id,\n       COUNT(*) AS item_count,\n       MIN(price) AS min_price,\n       MAX(price) AS max_price\nFROM menu_items\nGROUP BY category_id",
              "note": "בקטגוריה 2 (Mains) יש 70 מנות, במחירים מ־28.00 עד 86.00."
            },
            {
              "q": "רכזת השליחים: \"כמה שליחים יש לכל סוג רכב?\" (`vehicle_type`) (טבלה: `couriers`)",
              "answer": 4,
              "unit": "שורות",
              "solution": "SELECT vehicle_type,\n       COUNT(*) AS courier_count\nFROM couriers\nGROUP BY vehicle_type",
              "note": "Scooter: 15, e-Bike: 5, Car: 4, Bicycle: 1."
            },
            {
              "q": "שירות הלקוחות: \"כמה ביקורות קיבלנו מכל דירוג?\" (`rating`) (טבלה: `reviews`)",
              "answer": 4,
              "unit": "שורות",
              "hint": "יש 5 דירוגים אפשריים. כמה מהם מופיעים בנתונים?",
              "solution": "SELECT rating,\n       COUNT(*) AS review_count\nFROM reviews\nGROUP BY rating",
              "note": "אין אף ביקורת עם דירוג 1. GROUP BY מציג רק ערכים שקיימים בנתונים. דירוג 2: 8, דירוג 3: 72, דירוג 4: 163, דירוג 5: 227."
            },
            {
              "q": "הנהלת החברה: \"כמה הזמנות היו בכל חודש של 2026?\" (טבלה: `orders`)",
              "answer": 6,
              "unit": "שורות",
              "solution": "SELECT MONTH(order_date) AS order_month,\n       COUNT(*) AS order_count\nFROM orders\nWHERE order_date >= '20260101'\nGROUP BY MONTH(order_date)",
              "note": "לפי חודשים 1 עד 6: 80, 77, 83, 79, 69, 82. פברואר (77) מוכר מפרק 7."
            }
          ]
        },
        {
          "id": "13-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 13",
          "intro": "הנהלת FoodRush מכינה סיכום חצי שנתי, וכמה מחלקות רוצות לראות את הנתונים מחולקים לקבוצות. לכל שאלה כתבו שאילתה עם GROUP BY, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "האם העסק ירד ב־2026?",
              "context": "חבר בהנהלה ראה 780 הזמנות ב־2025 ורק 470 ב־2026, ומבקש לדעת אם העסק בירידה לפני שמקצצים בתקציב.",
              "task": "השוו רק את החודשים ינואר עד יוני בכל שנה: הציגו לכל שנה את מספר ההזמנות בחודשים 1 עד 6. שאילתה אחת, שורה לכל שנה.",
              "explain": "כמה הזמנות היו בחצי הראשון של כל שנה, בכמה אחוזים השתנה המספר, ולמה ההשוואה של 780 מול 470 מטעה.",
              "answer": [
                345,
                470
              ],
              "label": "שני מספרים: 2025, 2026",
              "hint": "קודם WHERE על החודש, אחר כך GROUP BY על השנה.",
              "solution": "SELECT YEAR(order_date) AS order_year,\n       COUNT(*) AS order_count\nFROM orders\nWHERE MONTH(order_date) <= 6\nGROUP BY YEAR(order_date)",
              "note": "345 הזמנות בחצי הראשון של 2025, ו־470 בחצי הראשון של 2026: עלייה של כ־36%. הנתונים של 2026 נגמרים ב־30 ביוני, ולכן 780 מול 470 משווה שנה שלמה לחצי שנה. תשובה טובה אומרת שהעסק דווקא גדל, ושאין סיבה לקצץ."
            },
            {
              "title": "מאיפה מגיעים לקוחות חדשים",
              "context": "השיווק צריך להחליט אם להגדיל את תקציב גיוס הלקוחות, ומבקש לראות כמה לקוחות חדשים הצטרפו בכל שנה.",
              "task": "מטבלת customers הציגו לכל שנת הצטרפות (`join_date`) את מספר הלקוחות שהצטרפו בה, מהשנה המוקדמת למאוחרת.",
              "explain": "כמה לקוחות הצטרפו בכל שנה, מה קרה ב־2026 (זכרו שזו חצי שנה), ומה אתם ממליצים לשיווק.",
              "answer": [
                49,
                55,
                54,
                2
              ],
              "label": "ארבעה מספרים לפי סדר השנים",
              "solution": "SELECT YEAR(join_date) AS join_year,\n       COUNT(*) AS new_customers\nFROM customers\nGROUP BY YEAR(join_date)\nORDER BY join_year",
              "note": "2023: 49, 2024: 55, 2025: 54, 2026: 2. גם בחצי שנה היינו מצפים לכ־27 לקוחות חדשים, והגיעו רק 2. יחד עם השאלה הקודמת: ההזמנות גדלו, אבל כמעט בלי לקוחות חדשים, כלומר הגידול מגיע מלקוחות קיימים. תשובה טובה ממליצה להשקיע בגיוס, כי צמיחה רק מלקוחות קיימים לא תימשך לאורך זמן."
            },
            {
              "title": "ביטולים לפי אמצעי תשלום",
              "context": "הכספים חושדים שבחלק מאמצעי התשלום יש יותר ביטולים, ושוקלים לדרוש אישור נוסף באמצעי שבו הביטולים הכי נפוצים.",
              "task": "מטבלת orders הציגו לכל `payment_method_id`: מספר הזמנות, מספר הזמנות שבוטלו (`order_status = 'Cancelled'`), ואחוז הביטולים מתוך ההזמנות באותו אמצעי.",
              "explain": "באיזה אמצעי תשלום אחוז הביטולים הכי גבוה ובאיזה הכי נמוך, בהשוואה לשאר, והאם לדעתכם כדאי לדרוש אישור נוסף ובאיזה אמצעי.",
              "answer": [
                44,
                16,
                4,
                8,
                0
              ],
              "label": "מספר הביטולים לפי סדר אמצעי התשלום 1 עד 5",
              "hint": "לאחוז: 100.0 * SUM(CASE ...) / COUNT(*). בלי .0 החלוקה תהיה של מספרים שלמים.",
              "solution": "SELECT payment_method_id,\n       COUNT(*) AS order_count,\n       SUM(CASE WHEN order_status = 'Cancelled' THEN 1 ELSE 0 END) AS cancelled,\n       100.0 * SUM(CASE WHEN order_status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(*) AS cancel_pct\nFROM orders\nGROUP BY payment_method_id\nORDER BY payment_method_id",
              "note": "1 Credit Card: 44 מתוך 597 (7.4%). 2 Bit: 16 מתוך 351 (4.6%). 3 PayPal: 4 מתוך 97 (4.1%). 4 Apple Pay: 8 מתוך 147 (5.4%). 5 Cash: 0 מתוך 58. בכרטיס אשראי אחוז הביטולים הכי גבוה, ובמזומן אין ביטולים בכלל. תשובה טובה משווה אחוזים ולא מספרים: 44 נראה הרבה גם כי בכרטיס אשראי יש הכי הרבה הזמנות."
            },
            {
              "title": "האם דמי המשלוח משקפים את זמן המשלוח",
              "context": "מנהלת התפעול רוצה לדעת אם משלוח יקר יותר באמת לוקח יותר זמן, כדי להחליט אם לשנות את מדרגות דמי המשלוח.",
              "task": "מטבלת orders, רק הזמנות שנמסרו (`order_status = 'Delivered'`): הציגו לכל ערך של `delivery_fee` את מספר המשלוחים ואת זמן המשלוח הממוצע עם שתי ספרות אחרי הנקודה, מדמי המשלוח הנמוכים לגבוהים.",
              "explain": "מה זמן המשלוח הממוצע בכל מדרגה, האם יש קשר בין המחיר לזמן, ומה אתם ממליצים לגבי המדרגות.",
              "answer": [
                34.98,
                35.19,
                34.89,
                35.22
              ],
              "label": "ארבעה ממוצעים לפי סדר דמי המשלוח",
              "hint": "delivery_minutes הוא INT. זוכרים מה AVG עושה לו?",
              "solution": "SELECT delivery_fee,\n       COUNT(*) AS deliveries,\n       CAST(AVG(delivery_minutes * 1.0) AS DECIMAL(5,2)) AS avg_minutes\nFROM orders\nWHERE order_status = 'Delivered'\nGROUP BY delivery_fee\nORDER BY delivery_fee",
              "note": "9.90: 34.98 דקות (291 משלוחים). 12.90: 35.19 (269). 14.90: 34.89 (250). 17.90: 35.22 (261). כל המדרגות סביב 35 דקות, ואין קשר בין המחיר לזמן. בלי * 1.0 מתקבלים 34, 35, 34, 35. בלי WHERE מופיעה גם שורה של 0.00, ההזמנות שנאספו, עם ממוצע NULL. תשובה טובה אומרת שדמי המשלוח לא משקפים את זמן המשלוח, וממליצה לבדוק לפי מה הם נקבעים."
            },
            {
              "title": "משמרת אחר הצהריים",
              "context": "רכזת השליחים בונה משמרות לפי חלקי היום, ורוצה לדעת אם יש בכלל צורך במשמרת אחר הצהריים.",
              "task": "מטבלת orders חלקו את ההזמנות לפי `order_time`: 'Lunch' לפני 15:00, 'Afternoon' לפני 18:00, 'Evening' לפני 22:00, ו־'Late' לכל השאר. הציגו את מספר ההזמנות בכל חלק של היום.",
              "explain": "כמה הזמנות בכל חלק של היום, איזה אחוז מכל ההזמנות נכנס אחר הצהריים, והאם לדעתכם צריך משמרת אחר הצהריים.",
              "answer": [
                377,
                40,
                688,
                145
              ],
              "label": "ארבעה מספרים: Lunch, Afternoon, Evening, Late",
              "hint": "את כל ה־CASE כותבים שוב ב־GROUP BY.",
              "solution": "SELECT CASE\n           WHEN order_time < '15:00' THEN 'Lunch'\n           WHEN order_time < '18:00' THEN 'Afternoon'\n           WHEN order_time < '22:00' THEN 'Evening'\n           ELSE 'Late'\n       END AS day_part,\n       COUNT(*) AS order_count\nFROM orders\nGROUP BY CASE\n             WHEN order_time < '15:00' THEN 'Lunch'\n             WHEN order_time < '18:00' THEN 'Afternoon'\n             WHEN order_time < '22:00' THEN 'Evening'\n             ELSE 'Late'\n         END",
              "note": "Lunch: 377, Afternoon: 40, Evening: 688, Late: 145. רק 40 הזמנות מתוך 1250, כ־3%, נכנסו אחר הצהריים, וכולן אחרי 17:00. בין 15:00 ל־17:00 אין אף הזמנה. תשובה טובה ממליצה לוותר על משמרת אחר הצהריים, ולהתחיל את משמרת הערב ב־17:00."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "השיווק: \"כמה לקוחות יש בכל עיר?\" מהעיר עם הכי הרבה לקוחות ומטה. (`city_id`)",
          "answer": 13,
          "unit": "שורות",
          "solution": "SELECT city_id,\n       COUNT(*) AS customer_count\nFROM customers\nGROUP BY city_id\nORDER BY customer_count DESC",
          "note": "הראשונה: עיר 1, 29 לקוחות. עיר 1 היא Tel Aviv-Yafo, אבל לחבר את השם לתוצאה עוד אי אפשר. את זה נלמד בפרק 15."
        },
        {
          "q": "הכספים: \"כמה הזמנות שולמו בכל אמצעי תשלום?\" (`payment_method_id`)",
          "answer": 5,
          "unit": "שורות",
          "solution": "SELECT payment_method_id,\n       COUNT(*) AS order_count\nFROM orders\nGROUP BY payment_method_id",
          "note": "אמצעי 1 (Credit Card): 597 הזמנות."
        },
        {
          "q": "השיווק: \"כמה מנות יש בכל קבוצת מחיר?\" קבוצות המחיר: Budget עד 25 ש\"ח (לא כולל), Mid מ־25 עד 50 (לא כולל), Premium מ־50 ומעלה. השתמשו ב־CASE כדי ליצור את הקבוצות.",
          "answer": 3,
          "unit": "שורות",
          "hint": "את כל ה־CASE כותבים שוב ב־GROUP BY, כמו YEAR בשקף \"קבוצה לפי חישוב\" בפרק 13.",
          "solution": "SELECT CASE\n           WHEN price < 25 THEN 'Budget'\n           WHEN price < 50 THEN 'Mid'\n           ELSE 'Premium'\n       END AS price_group,\n       COUNT(*) AS item_count\nFROM menu_items\nGROUP BY CASE\n             WHEN price < 25 THEN 'Budget'\n             WHEN price < 50 THEN 'Mid'\n             ELSE 'Premium'\n         END",
          "note": "Budget: 60, Mid: 89, Premium: 58."
        },
        {
          "q": "נציג השליחים: \"איזה שליח קיבל הכי הרבה טיפים, בסך הכול?\"",
          "answer": [
            15,
            637
          ],
          "label": "שני מספרים: מספר השליח, סך הטיפים",
          "solution": "SELECT TOP 1 courier_id,\n       SUM(tip) AS total_tips\nFROM orders\nGROUP BY courier_id\nORDER BY total_tips DESC",
          "note": "שליח 15, 637.00. ב־GROUP BY courier_id יש גם קבוצה של NULL (179 ההזמנות בלי שליח). ה־SUM שלה הוא NULL, ובמיון יורד הוא בסוף, ולכן לא מפריע ל־TOP 1. בלי DESC, דווקא שורת ה־NULL הייתה מגיעה ראשונה."
        },
        {
          "q": "`SELECT order_status, COUNT(*) FROM orders GROUP BY order_status`",
          "solution": "SELECT order_status,\n       COUNT(*)\nFROM orders\nGROUP BY order_status",
          "note": "3 שורות: שלושה סטטוסים."
        },
        {
          "q": "`SELECT is_vegan, COUNT(*) FROM menu_items GROUP BY is_vegan`",
          "solution": "SELECT is_vegan,\n       COUNT(*)\nFROM menu_items\nGROUP BY is_vegan",
          "note": "2 שורות: 1 ו־0."
        },
        {
          "q": "`SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id`",
          "solution": "SELECT customer_id,\n       COUNT(*)\nFROM orders\nGROUP BY customer_id",
          "note": "153 שורות, לא 160. רק לקוחות שהזמינו. אותו 153 כמו DISTINCT בפרק 4 ו־COUNT(DISTINCT) בפרק 12."
        },
        {
          "q": "`SELECT courier_id, COUNT(*) FROM orders GROUP BY courier_id`",
          "solution": "SELECT courier_id,\n       COUNT(*)\nFROM orders\nGROUP BY courier_id",
          "note": "25 שורות: 24 שליחים, ועוד קבוצה אחת של NULL, 179 ההזמנות בלי שליח. GROUP BY מכניס את כל ה־NULL לקבוצה אחת. COUNT(DISTINCT courier_id) החזיר 24, כי COUNT מדלג על NULL."
        },
        {
          "q": "`SELECT coupon_id, COUNT(*) FROM orders GROUP BY coupon_id`",
          "solution": "SELECT coupon_id,\n       COUNT(*)\nFROM orders\nGROUP BY coupon_id",
          "note": "8 שורות: 7 קופונים שהשתמשו בהם, ועוד NULL. VIP50 לא מופיע: הוא בתוקף רק מספטמבר 2026, אחרי סוף הנתונים."
        },
        {
          "q": "`SELECT city_id, COUNT(*) FROM restaurants GROUP BY city_id`",
          "solution": "SELECT city_id,\n       COUNT(*)\nFROM restaurants\nGROUP BY city_id",
          "note": "11 שורות. יש 13 ערים, אבל רק ב־11 מהן יש מסעדות."
        },
        {
          "q": "`SELECT YEAR(order_date), MONTH(order_date), COUNT(*) FROM orders GROUP BY YEAR(order_date), MONTH(order_date)`",
          "solution": "SELECT YEAR(order_date),\n       MONTH(order_date),\n       COUNT(*)\nFROM orders\nGROUP BY YEAR(order_date), MONTH(order_date)",
          "note": "18 שורות: 12 חודשים ב־2025 ו־6 ב־2026."
        }
      ]
    },
    {
      "n": 14,
      "title": "HAVING",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_19_99",
      "deckPages": [
        127,
        133
      ],
      "practices": [
        {
          "id": "14-1",
          "kind": "lesson",
          "title": "תרגול",
          "intro": "לכל בקשה: איזה תנאי שייך ל־WHERE ואיזה ל־HAVING? כתבו את השאילתה ב־SSMS והקלידו כאן כמה שורות קיבלתם.",
          "questions": [
            {
              "q": "השיווק: \"אילו לקוחות הזמינו לפחות 40 פעמים?\" (טבלה: `orders`)",
              "answer": 7,
              "unit": "שורות",
              "solution": "SELECT customer_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY customer_id\nHAVING COUNT(*) >= 40",
              "note": "לקוחות 3 ו־77 מובילים, עם 50 הזמנות כל אחד. לקוחה 3 מוכרת מפרק 5."
            },
            {
              "q": "רכזת השליחים: \"אילו שליחים ביצעו יותר מ־60 משלוחים?\" בדקו מה מתקבל עם `WHERE courier_id IS NOT NULL` ובלי WHERE. (טבלה: `orders`)",
              "answer": [
                4,
                5
              ],
              "label": "שני מספרים: עם WHERE, בלי WHERE",
              "solution": "SELECT courier_id, COUNT(*) AS delivery_count\nFROM orders\nWHERE courier_id IS NOT NULL\nGROUP BY courier_id\nHAVING COUNT(*) > 60",
              "note": "בלי WHERE מופיעה שורה נוספת עם courier_id ריק ו־179 הזמנות. GROUP BY מכניס את כל ה־NULL לקבוצה אחת. אלה 179 ההזמנות בלי משלוח. השליח המוביל הוא 15, עם 76 משלוחים."
            },
            {
              "q": "אילו מסעדות קיבלו טיפ ממוצע למשלוח (רק הזמנות שנמסרו) מעל 9 שקלים? (`tip`) (טבלה: `orders`)",
              "answer": 3,
              "unit": "שורות",
              "solution": "SELECT restaurant_id, AVG(tip) AS avg_tip\nFROM orders\nWHERE order_status = 'Delivered'\nGROUP BY restaurant_id\nHAVING AVG(tip) > 9",
              "note": "המסעדות הן 24, 11 ו־26. הממוצע של 24 הוא 10.20. גם בלי WHERE מתקבלות אותן 3: בהזמנות שלא נמסרו tip הוא NULL, ו־AVG מדלג עליו. tip היא DECIMAL, ולכן AVG לא קוצץ כאן ואין צורך ב־* 1.0."
            },
            {
              "q": "מוקד השירות: \"אילו מסעדות ביטלו לפחות 6 הזמנות?\" (טבלה: `orders`)",
              "answer": 2,
              "unit": "שורות",
              "solution": "SELECT restaurant_id, COUNT(*) AS cancelled_count\nFROM orders\nWHERE order_status = 'Cancelled'\nGROUP BY restaurant_id\nHAVING COUNT(*) >= 6",
              "note": "מסעדה 29 עם 8 ביטולים ומסעדה 17 עם 6. התנאי על הסטטוס הוא על כל שורה, ולכן ב־WHERE. התנאי על הספירה ב־HAVING."
            }
          ]
        },
        {
          "id": "14-2",
          "kind": "lesson",
          "title": "שאלה עסקית",
          "intro": "לכל שאלה: החליטו קודם אילו תנאים שייכים ל־WHERE ואילו ל־HAVING. רק אחר כך כתבו את השאילתה.",
          "questions": [
            {
              "q": "מנהלת התפעול רוצה לשלוח שליח נוסף למסעדות האיטיות (זמן משלוח ממוצע מעל 40 דקות). מנהל הכספים טוען שאחת מהן לא באמת איטית, פשוט יש לה מעט מדי משלוחים כדי לדעת. כתבו שאילתה שמחזירה רק מסעדות עם ממוצע מעל 40 דקות ולפחות 10 משלוחים. (טבלה: `orders`)",
              "answer": 4,
              "unit": "שורות",
              "hint": "שני התנאים הם על סיכומים. איך מחברים שני תנאים?",
              "solution": "SELECT restaurant_id,\n       AVG(delivery_minutes) AS avg_minutes,\n       COUNT(delivery_minutes) AS delivery_count\nFROM orders\nGROUP BY restaurant_id\nHAVING AVG(delivery_minutes) > 40\n   AND COUNT(delivery_minutes) >= 10",
              "note": "מסעדה 28 נעלמת: יש לה רק 4 משלוחים בכל התקופה. ממוצע של 4 משלוחים הוא לא בסיס להחלטה, ולכן מנהל הכספים צודק. שני התנאים ב־HAVING, מחוברים ב־AND, בדיוק כמו ב־WHERE. COUNT(delivery_minutes) סופר בדיוק את המשלוחים שנכנסו לממוצע."
            },
            {
              "q": "השיווק רוצה לתת הטבה ללקוחות נאמנים: לקוחות שהזמינו לפחות 10 פעמים מאז תחילת 2026. (טבלה: `orders`)",
              "answer": 15,
              "unit": "שורות",
              "solution": "SELECT customer_id, COUNT(*) AS order_count\nFROM orders\nWHERE order_date >= '20260101'\nGROUP BY customer_id\nHAVING COUNT(*) >= 10",
              "note": "התנאי על התאריך הוא על כל שורה, ולכן ב־WHERE. ב־HAVING הוא היה גורם לשגיאה, כי order_date לא מופיע ב־GROUP BY. הלקוח המוביל הוא 77, עם 23 הזמנות ב־2026."
            }
          ]
        },
        {
          "id": "14-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 14",
          "intro": "כמה מחלקות ב־FoodRush צריכות לקבל החלטות, וכל אחת מהן צריכה רשימה של קבוצות שעומדות בתנאי. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "שליחים עם הרבה משלוחים איטיים",
              "context": "רכזת השליחים רוצה לשלוח להשתלמות קצרה רק שליחים שהיו להם הרבה משלוחים איטיים, ולא להעמיס על כל הצוות.",
              "task": "בטבלת orders, ספרו לכל שליח (`courier_id`) כמה משלוחים לקחו יותר מ־45 דקות (`delivery_minutes`). הציגו רק שליחים שיש להם לפחות 12 משלוחים כאלה, ומיינו מהגבוה לנמוך.",
              "explain": "כמה שליחים יישלחו להשתלמות, מי השליח עם הכי הרבה משלוחים איטיים וכמה היו לו. בדקו גם את שליח 15, שביצע הכי הרבה משלוחים בחברה (76): האם הוא ברשימה? מה זה אומר על הקשר בין כמות משלוחים לאיטיות?",
              "answer": 7,
              "label": "כמה שליחים",
              "hint": "התנאי על הדקות הוא על כל משלוח. התנאי על הכמות הוא על הקבוצה.",
              "solution": "SELECT courier_id, COUNT(*) AS slow_count\nFROM orders\nWHERE delivery_minutes > 45\nGROUP BY courier_id\nHAVING COUNT(*) >= 12\nORDER BY slow_count DESC",
              "note": "7 שליחים: 18 (15 משלוחים איטיים), 21 ו־24 (14), 17 ו־22 (13), 11 ו־13 (12). שליח 15 לא ברשימה: מתוך 76 משלוחים רק 2 היו איטיים. כלומר, מי שעושה הכי הרבה משלוחים הוא לא בהכרח האיטי. תשובה טובה מציינת את 7, את שליח 18, ואת הפער של שליח 15."
            },
            {
              "title": "קטגוריית פרימיום באפליקציה",
              "context": "השיווק רוצה להוסיף לאפליקציה קטגוריית \"פרימיום\" של מסעדות יקרות, והיא תיכנס רק אם יש בה מספיק מסעדות עם מבחר מנות.",
              "task": "בטבלת `menu_items`, חשבו לכל מסעדה (`restaurant_id`) את המחיר הממוצע של המנות. שאילתה ראשונה: רק מסעדות שהמחיר הממוצע אצלן מעל 40 שקל. שאילתה שנייה: אותו תנאי, ובנוסף לפחות 6 מנות בתפריט.",
              "explain": "כמה מסעדות עומדות בתנאי המחיר, כמה נשארות אחרי שמוסיפים את תנאי המבחר, ואיזה חלק הן מכל 30 המסעדות. האם לדעתכם יש מספיק מסעדות לקטגוריה?",
              "answer": [
                6,
                5
              ],
              "label": "שני מספרים: רק תנאי המחיר, מחיר ומבחר",
              "solution": "SELECT restaurant_id, AVG(price) AS avg_price\nFROM menu_items\nGROUP BY restaurant_id\nHAVING AVG(price) > 40\n\nSELECT restaurant_id, AVG(price) AS avg_price, COUNT(*) AS item_count\nFROM menu_items\nGROUP BY restaurant_id\nHAVING AVG(price) > 40\n   AND COUNT(*) >= 6",
              "note": "6 מסעדות מעל 40 שקל: 22, 13, 2, 10, 25 ו־15. מסעדה 15 נופלת בשאילתה השנייה, כי יש לה רק 5 מנות. נשארות 5, שהן שישית מהמסעדות. price היא DECIMAL, ולכן AVG לא קוצץ. תשובה טובה אומרת אם 5 מסעדות מספיקות לקטגוריה, ומנמקת."
            },
            {
              "title": "לקוחות שאוהבים לגוון",
              "context": "השיווק רוצה לשלוח הודעה על מסעדה חדשה רק ללקוחות שכבר הוכיחו שהם אוהבים לנסות מסעדות שונות.",
              "task": "בטבלת orders, ספרו לכל לקוח (`customer_id`) מכמה מסעדות שונות הוא הזמין. הציגו גם את מספר ההזמנות שלו. השאירו רק לקוחות שהזמינו מלפחות 8 מסעדות שונות, ומיינו מהגבוה לנמוך.",
              "explain": "כמה לקוחות יקבלו את ההודעה, מי הלקוח שהזמין מהכי הרבה מסעדות, ומכמה הזמנות. השוו ללקוחה 3, שהזמינה 50 פעמים: מכמה מסעדות היא הזמינה? מה זה אומר על ההבדל בין לקוח נאמן ללקוח שאוהב לגוון?",
              "answer": 8,
              "label": "כמה לקוחות",
              "hint": "COUNT(DISTINCT ...) מפרק 12 סופר ערכים שונים.",
              "solution": "SELECT customer_id,\n       COUNT(DISTINCT restaurant_id) AS restaurant_count,\n       COUNT(*) AS order_count\nFROM orders\nGROUP BY customer_id\nHAVING COUNT(DISTINCT restaurant_id) >= 8\nORDER BY restaurant_count DESC",
              "note": "8 לקוחות. לקוח 144 מוביל: 13 מסעדות שונות מתוך 23 הזמנות בלבד. לקוחה 3, עם 50 הזמנות, הזמינה מ־5 מסעדות בלבד, ולכן היא לא ברשימה (אפשר לבדוק עם WHERE customer_id = 3). המסקנה: הרבה הזמנות לא אומר הרבה מסעדות. ללקוח נאמן כדאי לשלוח הטבה במסעדה שהוא כבר אוהב, וללקוח שמגוון כדאי לשלוח מסעדה חדשה."
            },
            {
              "title": "ימים שצריכים משמרת נוספת",
              "context": "מנהלת התפעול רוצה להוסיף משמרת שליחים קבועה רק בימים בשבוע שבהם נכנסו לפחות 200 הזמנות בכל התקופה.",
              "task": "בטבלת orders, קבצו את ההזמנות לפי שם היום בשבוע (`DATENAME(WEEKDAY, order_date)`) וספרו כמה הזמנות היו בכל יום. הציגו רק ימים עם לפחות 200 הזמנות. בשאילתה נוספת, בלי HAVING, מצאו את היום עם הכי מעט הזמנות.",
              "explain": "באילו ימים כדאי להוסיף משמרת וכמה הזמנות היו בהם, איזה יום הכי שקט וכמה הזמנות היו בו, ובכמה הוא שקט יותר מהיום העמוס ביותר.",
              "answer": 2,
              "label": "כמה ימים",
              "hint": "אותו ביטוי בדיוק צריך להופיע ב־SELECT וב־GROUP BY.",
              "solution": "SELECT DATENAME(WEEKDAY, order_date) AS day_name, COUNT(*) AS order_count\nFROM orders\nGROUP BY DATENAME(WEEKDAY, order_date)\nHAVING COUNT(*) >= 200\n\nSELECT DATENAME(WEEKDAY, order_date) AS day_name, COUNT(*) AS order_count\nFROM orders\nGROUP BY DATENAME(WEEKDAY, order_date)\nORDER BY order_count",
              "note": "שני ימים: Friday עם 211 ו־Thursday עם 208. היום השקט ביותר הוא Saturday עם 148, בערך 60 הזמנות פחות מיום שישי. תשובה טובה ממליצה על משמרת נוספת בחמישי ובשישי, ואולי על פחות שליחים בשבת."
            },
            {
              "title": "שיעור ביטולים, לא מספר ביטולים",
              "context": "מוקד השירות קיבל רשימה של המסעדות עם הכי הרבה ביטולים, אבל מנהלת השירות חושבת שצריך לבדוק איזה חלק מההזמנות של כל מסעדה בוטל, ולא רק כמה.",
              "task": "בטבלת orders, חשבו לכל מסעדה את מספר ההזמנות, את מספר הביטולים (`order_status = 'Cancelled'`), ואת שיעור הביטולים: מספר הביטולים חלקי מספר ההזמנות. הציגו רק מסעדות ששיעור הביטולים שלהן מעל 10%.",
              "explain": "כמה מסעדות עוברות 10% ביטולים, מה השיעור של כל אחת, והאם הרשימה דומה לרשימה של \"לפחות 6 ביטולים\" מתרגול 14.7 (מסעדות 29 ו־17). מה אתם ממליצים למוקד השירות: לבדוק לפי מספר או לפי שיעור?",
              "answer": 4,
              "label": "כמה מסעדות",
              "hint": "את הביטולים אפשר לספור עם SUM(CASE WHEN ... THEN 1 ELSE 0 END). כדי שהחלוקה לא תהיה חלוקת מספרים שלמים, כפלו ב־1.0.",
              "solution": "SELECT restaurant_id,\n       COUNT(*) AS order_count,\n       SUM(CASE WHEN order_status = 'Cancelled' THEN 1 ELSE 0 END) AS cancelled_count,\n       1.0 * SUM(CASE WHEN order_status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(*) AS cancel_rate\nFROM orders\nGROUP BY restaurant_id\nHAVING 1.0 * SUM(CASE WHEN order_status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(*) > 0.1",
              "note": "4 מסעדות: 7 (4 מתוך 24, כ־17%), 24 (3 מתוך 20, 15%), 3 (3 מתוך 26, כ־12%), 29 (8 מתוך 72, כ־11%). מסעדה 17, עם 6 ביטולים, לא ברשימה: 6 מתוך 83 זה כ־7% בלבד. בלי 1.0 החלוקה היא של מספרים שלמים, כל השיעורים יוצאים 0, ומתקבלות 0 שורות. תשובה טובה ממליצה לבדוק לפי שיעור, ומציינת שמסעדה 7 בעייתית יותר ממסעדה 17."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "אילו מסעדות מציעות לפחות 8 מנות בתפריט? (`menu_items`)",
          "answer": 9,
          "unit": "שורות",
          "solution": "SELECT restaurant_id, COUNT(*) AS item_count\nFROM menu_items\nGROUP BY restaurant_id\nHAVING COUNT(*) >= 8"
        },
        {
          "q": "הכספים: \"אילו הזמנות הסתכמו ביותר מ־300 שקל?\" (רמז: `order_items`)",
          "answer": 7,
          "unit": "שורות",
          "hint": "הסכום של הזמנה נמצא בטבלת order_items: כמות כפול מחיר, לכל שורה.",
          "solution": "SELECT order_id, SUM(quantity * unit_price) AS order_total\nFROM order_items\nGROUP BY order_id\nHAVING SUM(quantity * unit_price) > 300",
          "note": "ההזמנה הגדולה ביותר היא 994, עם 441 שקל."
        },
        {
          "q": "באילו חודשים היו לפחות 80 הזמנות? (שנה וחודש יחד)",
          "answer": 4,
          "unit": "שורות",
          "hint": "YEAR ו־MONTH מפרק 10, גם ב־SELECT וגם ב־GROUP BY.",
          "solution": "SELECT YEAR(order_date) AS order_year,\n       MONTH(order_date) AS order_month,\n       COUNT(*) AS order_count\nFROM orders\nGROUP BY YEAR(order_date), MONTH(order_date)\nHAVING COUNT(*) >= 80",
          "note": "אוקטובר 2025 מוביל עם 94 הזמנות. אחריו מרץ 2026 (83), יוני 2026 (82) וינואר 2026 (80). ינואר 2026 נכנס רק בגלל >=."
        }
      ]
    },
    {
      "n": 15,
      "title": "JOIN",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_19_177",
      "deckPages": [
        134,
        150
      ],
      "practices": [
        {
          "id": "15-1",
          "kind": "lesson",
          "title": "תרגול",
          "intro": "לכל בקשה: אילו טבלאות צריך, ואיך הן מתחברות? בדקו בתרשים ה־ERD. כתבו את השאילתה ב־SSMS והקלידו כאן כמה שורות קיבלתם.",
          "questions": [
            {
              "q": "המטבח: \"תנו לי את כל המנות בתפריט, עם שם המסעדה של כל מנה.\"",
              "answer": 207,
              "unit": "שורות",
              "solution": "SELECT m.item_name, m.price, r.restaurant_name\nFROM menu_items AS m\nINNER JOIN restaurants AS r\n    ON m.restaurant_id = r.restaurant_id"
            },
            {
              "q": "כמה מסעדות יש מכל סוג מטבח? (שם המטבח, לא המספר)",
              "answer": 10,
              "unit": "שורות",
              "solution": "SELECT cu.cuisine_name, COUNT(*) AS restaurant_count\nFROM restaurants AS r\nINNER JOIN cuisines AS cu\n    ON r.cuisine_id = cu.cuisine_id\nGROUP BY cu.cuisine_name",
              "note": "יש 11 סוגי מטבח, אבל מתקבלות רק 10 שורות. המטבח האתיופי (Ethiopian) נעלם, כי אין לו אף מסעדה. נחזור לזה בפרק 16."
            },
            {
              "q": "כמה כסף הכניסה כל קטגוריית מנות? (לפי המחיר ששולם בפועל)",
              "answer": 5,
              "unit": "שורות",
              "hint": "שלוש טבלאות: order_items, menu_items ו־dish_categories.",
              "solution": "SELECT dc.category_name, SUM(oi.quantity * oi.unit_price) AS sales\nFROM order_items AS oi\nINNER JOIN menu_items AS m\n    ON oi.item_id = m.item_id\nINNER JOIN dish_categories AS dc\n    ON m.category_id = dc.category_id\nGROUP BY dc.category_name",
              "note": "Mains מובילה עם 57,074 שקל. עם m.price במקום oi.unit_price הסכום יוצא גבוה יותר (60,039), כי המחירים עלו ב־1.1.2026."
            },
            {
              "q": "אילו מסעדות נמצאות ב־Tel Aviv-Yafo עם זמן הכנה מתחת ל־15 דקות? (`avg_prep_minutes`)",
              "answer": 3,
              "unit": "שורות",
              "solution": "SELECT r.restaurant_name, r.avg_prep_minutes\nFROM restaurants AS r\nINNER JOIN cities AS ci\n    ON r.city_id = ci.city_id\nWHERE ci.city_name = 'Tel Aviv-Yafo'\n  AND r.avg_prep_minutes < 15",
              "note": "Smash Brothers, Green Fork ו־Gelato Gardens. Shuk Kitchen מכינה ב־15 דקות בדיוק, ולכן לא נכנסת. התנאי על שם העיר מחייב JOIN, כי city_name לא נמצא בטבלת restaurants."
            }
          ]
        },
        {
          "id": "15-2",
          "kind": "lesson",
          "title": "שאלה עסקית",
          "intro": "הנהלת FoodRush רוצה לגייס שליחים נוספים. העיר של ההזמנה היא העיר של המסעדה. חשבו אילו טבלאות צריך, ואיך הן מתחברות.",
          "questions": [
            {
              "q": "באיזו עיר יש הכי הרבה הזמנות?",
              "answer": 237,
              "label": "מספר ההזמנות בעיר המובילה",
              "solution": "SELECT ci.city_name, COUNT(*) AS order_count\nFROM orders AS o\nINNER JOIN restaurants AS r\n    ON o.restaurant_id = r.restaurant_id\nINNER JOIN cities AS ci\n    ON r.city_id = ci.city_id\nGROUP BY ci.city_name\nORDER BY order_count DESC",
              "note": "11 שורות. Haifa ראשונה עם 237, Tel Aviv-Yafo שנייה עם 232. בחיפה יש רק 3 מסעדות עם הזמנות, ובתל אביב 6. חיפה מובילה בזכות שתי המסעדות העמוסות, Carmel Bites ו־Port Noodles. 11 ערים ולא 13: ל־Eilat ול־Kiryat Shmona אין מסעדות."
            },
            {
              "q": "האם התשובה משתנה אם שואלים על מחוז (`district`) במקום עיר?",
              "answer": 382,
              "label": "מספר ההזמנות במחוז המוביל",
              "solution": "SELECT ci.district, COUNT(*) AS order_count\nFROM orders AS o\nINNER JOIN restaurants AS r\n    ON o.restaurant_id = r.restaurant_id\nINNER JOIN cities AS ci\n    ON r.city_id = ci.city_id\nGROUP BY ci.district\nORDER BY order_count DESC",
              "note": "5 שורות. Tel Aviv ראשון עם 382, Center עם 286, Haifa עם 237. התשובה מתהפכת: מחוז Tel Aviv כולל גם את Ramat Gan ו־Herzliya. התשובה תלויה ברמה שבה מקבצים."
            }
          ]
        },
        {
          "id": "15-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 15",
          "intro": "עכשיו אפשר לענות לכל מחלקה עם שמות, ולא רק עם מספרים. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "איזה מטבח מכניס הכי הרבה",
              "context": "השיווק צריך להחליט על איזה סוג מטבח לשים את תקציב הפרסום של הרבעון, ורוצה לדעת אם המטבח עם הכי הרבה הזמנות הוא גם זה שמכניס הכי הרבה כסף.",
              "task": "חברו את orders, `order_items`, restaurants ו־cuisines. לכל סוג מטבח (`cuisine_name`) חשבו את סך ההכנסות (quantity כפול `unit_price`) ואת מספר ההזמנות השונות (`COUNT(DISTINCT o.order_id)`). אל תכללו הזמנות שבוטלו. מיינו לפי ההכנסות מהגבוה לנמוך.",
              "explain": "איזה מטבח מכניס הכי הרבה וכמה, איזה מטבח מוביל במספר ההזמנות, והאם זה אותו מטבח. מה זה אומר על הסכום של הזמנה ממוצעת בכל אחד מהם? על איזה מטבח הייתם שמים את התקציב?",
              "answer": [
                18696,
                174
              ],
              "label": "שני מספרים: ההכנסות של המטבח המוביל, מספר ההזמנות הגבוה ביותר",
              "hint": "COUNT(*) כאן היה סופר שורות של מנות ולא הזמנות, כי בכל הזמנה יש כמה מנות.",
              "solution": "SELECT cu.cuisine_name,\n       SUM(oi.quantity * oi.unit_price) AS sales,\n       COUNT(DISTINCT o.order_id) AS order_count\nFROM orders AS o\nINNER JOIN order_items AS oi\n    ON o.order_id = oi.order_id\nINNER JOIN restaurants AS r\n    ON o.restaurant_id = r.restaurant_id\nINNER JOIN cuisines AS cu\n    ON r.cuisine_id = cu.cuisine_id\nWHERE o.order_status <> 'Cancelled'\nGROUP BY cu.cuisine_name\nORDER BY sales DESC",
              "note": "Italian מכניס הכי הרבה: 18,696 שקל מ־161 הזמנות. Middle Eastern מוביל במספר ההזמנות (174), אבל רק שלישי בהכנסות (14,610). כלומר, הזמנה איטלקית גדולה יותר בממוצע. Vegan אחרון עם 3,560. תשובה טובה מבחינה בין כמות הזמנות להכנסות, וממליצה לפי המטרה: יותר כסף או יותר לקוחות."
            },
            {
              "title": "איזה רכב הכי מהיר",
              "context": "רכזת השליחים צריכה להחליט איזה סוג רכב לקנות לשליחים החדשים, והיא רוצה לדעת עם איזה רכב המשלוחים מגיעים הכי מהר.",
              "task": "חברו את orders ו־couriers. לכל סוג רכב (`vehicle_type`) חשבו את מספר המשלוחים ואת זמן המשלוח הממוצע (`delivery_minutes`), מעוגל לספרה אחת אחרי הנקודה. מיינו מהמהיר לאיטי.",
              "explain": "מה זמן המשלוח הממוצע של כל סוג רכב, מי המהיר ביותר ובכמה דקות הוא מהיר מהאיטי ביותר, ועל כמה משלוחים מבוסס כל ממוצע. איזה רכב הייתם קונים?",
              "answer": 31.7,
              "label": "הזמן הממוצע של הרכב המהיר ביותר",
              "hint": "delivery_minutes היא INT. מה יקרה לממוצע בלי 1.0?",
              "solution": "SELECT co.vehicle_type,\n       COUNT(*) AS delivery_count,\n       ROUND(AVG(1.0 * o.delivery_minutes), 1) AS avg_minutes\nFROM orders AS o\nINNER JOIN couriers AS co\n    ON o.courier_id = co.courier_id\nGROUP BY co.vehicle_type\nORDER BY avg_minutes",
              "note": "e-Bike: 31.7 דקות (236 משלוחים). Car: 35.5 (114). Scooter: 35.8 (662). Bicycle: 39.2 (59). אופניים חשמליים מהירים בכ־4 דקות מקטנוע ומרכב, ורכב וקטנוע כמעט זהים. בלי 1.0 הממוצעים נחתכים ל־31, 35, 35 ו־39, וההבדל בין רכב לקטנוע נעלם. תשובה טובה ממליצה על e-Bike ומציינת שלאופניים רגילים יש רק 59 משלוחים."
            },
            {
              "title": "לקוחות שמזמינים מעיר אחרת",
              "context": "צוות האפליקציה שוקל להציג לכל לקוח רק מסעדות מהעיר שבה הוא גר, ורוצה לדעת כמה הזמנות היו נפגעות מזה.",
              "task": "חברו את orders, customers ו־restaurants. ספרו בכמה הזמנות העיר של הלקוח (`c.city_id`) זהה לעיר של המסעדה (`r.city_id`). אחר כך ספרו בכמה הזמנות היא שונה.",
              "explain": "כמה הזמנות הן מהעיר של הלקוח וכמה מעיר אחרת, איזה חלק מכל 1250 ההזמנות היה נפגע מהשינוי, והאם אתם ממליצים על השינוי.",
              "answer": [
                942,
                308
              ],
              "label": "שני מספרים: אותה עיר, עיר אחרת",
              "hint": "ב־WHERE אפשר להשוות עמודה מטבלה אחת לעמודה מטבלה אחרת.",
              "solution": "SELECT COUNT(*) AS same_city\nFROM orders AS o\nINNER JOIN customers AS c\n    ON o.customer_id = c.customer_id\nINNER JOIN restaurants AS r\n    ON o.restaurant_id = r.restaurant_id\nWHERE c.city_id = r.city_id\n\nSELECT COUNT(*) AS other_city\nFROM orders AS o\nINNER JOIN customers AS c\n    ON o.customer_id = c.customer_id\nINNER JOIN restaurants AS r\n    ON o.restaurant_id = r.restaurant_id\nWHERE c.city_id <> r.city_id",
              "note": "942 הזמנות מאותה עיר, ו־308 מעיר אחרת: כמעט רבע מההזמנות. השינוי היה פוגע בהזמנה אחת מכל ארבע, ולכן לא כדאי להגביל. 942 ועוד 308 זה 1250."
            },
            {
              "title": "איפה לפתוח מסעדה חדשה",
              "context": "ההנהלה שוקלת לפתוח מסעדה בעיר חדשה, ורוצה לדעת באילו ערים גרים הלקוחות שמזמינים הכי הרבה.",
              "task": "חברו את orders, customers ו־cities. לכל עיר (`city_name`) ספרו כמה הזמנות ביצעו לקוחות שגרים בה. מיינו מהגבוה לנמוך. אחר כך השוו לתשובה של השאלה העסקית בסוף פרק 15: באילו ערים יש מסעדות?",
              "explain": "באיזו עיר גרים הלקוחות שמזמינים הכי הרבה וכמה הזמנות, ואיזו עיר ברשימה מפתיעה כשמשווים לרשימת הערים שיש בהן מסעדות. איפה הייתם ממליצים לפתוח את המסעדה החדשה, ולמה?",
              "answer": [
                230,
                129
              ],
              "label": "שני מספרים: העיר המובילה, Kiryat Shmona",
              "hint": "העיר כאן היא העיר של הלקוח, לא של המסעדה. במה ה־ON שונה מהשאלה העסקית בסוף פרק 15?",
              "solution": "SELECT ci.city_name, COUNT(*) AS order_count\nFROM orders AS o\nINNER JOIN customers AS c\n    ON o.customer_id = c.customer_id\nINNER JOIN cities AS ci\n    ON c.city_id = ci.city_id\nGROUP BY ci.city_name\nORDER BY order_count DESC",
              "note": "Tel Aviv-Yafo מובילה עם 230. ההפתעה: Kiryat Shmona במקום הרביעי, עם 129 הזמנות, ואין בה אף מסעדה. הלקוחות שם מזמינים ממסעדות בערים אחרות. תשובה טובה ממליצה לפתוח מסעדה ב־Kiryat Shmona, ומסבירה שיש שם ביקוש ואין תחרות."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "לכל מסעדה, שם העיר שבה היא נמצאת.",
          "answer": 30,
          "unit": "שורות",
          "solution": "SELECT r.restaurant_name, ci.city_name\nFROM restaurants AS r\nINNER JOIN cities AS ci\n    ON r.city_id = ci.city_id"
        },
        {
          "q": "רכזת השליחים: \"מי שלושת השליחים שביצעו הכי הרבה משלוחים? שם פרטי ושם משפחה.\"",
          "answer": 3,
          "unit": "שורות",
          "solution": "SELECT TOP 3 co.courier_id, co.first_name, co.last_name, COUNT(*) AS delivery_count\nFROM orders AS o\nINNER JOIN couriers AS co\n    ON o.courier_id = co.courier_id\nGROUP BY co.courier_id, co.first_name, co.last_name\nORDER BY delivery_count DESC",
          "note": "Inbar Klein עם 76 משלוחים, Orly Golan עם 70, Maya Shapiro עם 69. לא לבלבל עם הלקוחה Inbar Golan. ה־JOIN עם couriers מחזיר 1071 שורות ולא 1250: 179 ההזמנות בלי שליח לא מוצאות התאמה."
        },
        {
          "q": "הכספים: \"כמה הזמנות שולמו בכל אמצעי תשלום?\" (שם אמצעי התשלום, לא המספר)",
          "answer": 5,
          "unit": "שורות",
          "solution": "SELECT pm.method_name, COUNT(*) AS order_count\nFROM orders AS o\nINNER JOIN payment_methods AS pm\n    ON o.payment_method_id = pm.payment_method_id\nGROUP BY pm.method_name",
          "note": "Credit Card מוביל עם 597 הזמנות."
        },
        {
          "q": "אילו מסעדות ביטלו לפחות 6 הזמנות? יש לכלול את שם המסעדה.",
          "answer": 2,
          "unit": "שורות",
          "solution": "SELECT r.restaurant_name, COUNT(*) AS cancelled_count\nFROM orders AS o\nINNER JOIN restaurants AS r\n    ON o.restaurant_id = r.restaurant_id\nWHERE o.order_status = 'Cancelled'\nGROUP BY r.restaurant_name\nHAVING COUNT(*) >= 6",
          "note": "Ashdod Sushi עם 8 ו־Port Noodles עם 6. אלה מסעדות 29 ו־17 מהתרגול של פרק 14."
        }
      ]
    },
    {
      "n": 16,
      "title": "LEFT JOIN ו־self join",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_19_279",
      "deckPages": [
        151,
        160
      ],
      "practices": [
        {
          "id": "16-1",
          "kind": "lesson",
          "title": "תרגול: בקשות מהצוות",
          "intro": "לפני כל שאילתה: האם צריך INNER JOIN או LEFT JOIN? ואם LEFT, מה בודקים ב־WHERE?",
          "questions": [
            {
              "q": "רכזת השליחים: \"יש שליח שעוד לא ביצע אף משלוח?\"",
              "answer": 1,
              "unit": "שורות",
              "solution": "SELECT c.courier_id, c.first_name, c.last_name, c.hire_date\nFROM couriers AS c\nLEFT JOIN orders AS o\n    ON o.courier_id = c.courier_id\nWHERE o.order_id IS NULL",
              "note": "Yonatan Biton, שהתחיל לעבוד ב־2026-05-01, חודשיים לפני סוף הנתונים."
            },
            {
              "q": "ההנהלה: \"יש מסעדה שלא קיבלה אף הזמנה?\" מתי היא נפתחה? (`opened_date`)",
              "answer": 1,
              "unit": "שורות",
              "solution": "SELECT r.restaurant_id, r.restaurant_name, r.opened_date\nFROM restaurants AS r\nLEFT JOIN orders AS o\n    ON o.restaurant_id = r.restaurant_id\nWHERE o.order_id IS NULL",
              "note": "Lev Hamifratz Diner, שנפתחה ב־2026-07-01, יום אחרי סוף הנתונים."
            },
            {
              "q": "השיווק: \"כמה הזמנות ביצע כל לקוח, כולל מי שלא הזמין אף פעם?\"",
              "answer": 160,
              "unit": "שורות",
              "hint": "מה סופרים: COUNT(*) או עמודה מהטבלה הימנית?",
              "solution": "SELECT c.customer_id, c.first_name, c.last_name, COUNT(o.order_id) AS orders_count\nFROM customers AS c\nLEFT JOIN orders AS o\n    ON o.customer_id = c.customer_id\nGROUP BY c.customer_id, c.first_name, c.last_name\nORDER BY orders_count",
              "note": "7 השורות הראשונות עם 0. מי שכותב COUNT(*) יקבל 1 במקום 0 אצל 7 הלקוחות. זו המלכודת מהשקף על COUNT אחרי LEFT JOIN."
            },
            {
              "q": "השיווק: \"אילו לקוחות לא סימנו אף מסעדה כמועדפת?\" (`favorites`)",
              "answer": 32,
              "unit": "שורות",
              "solution": "SELECT c.customer_id, c.first_name, c.last_name\nFROM customers AS c\nLEFT JOIN favorites AS f\n    ON f.customer_id = c.customer_id\nWHERE f.restaurant_id IS NULL"
            }
          ]
        },
        {
          "id": "16-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 16",
          "intro": "הפעם השאלות הן גם על מה שאין: מסעדות שכמעט לא מזמינים מהן, לקוחות שהפסיקו להזמין, ומי מחובר למי בתוך אותה טבלה. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "מסעדות שצריכות עזרה ב־2026",
              "context": "מנהלת הפיתוח העסקי רוצה להציע קמפיין קידום למסעדות שקיבלו פחות מ־10 הזמנות מתחילת 2026, כולל מסעדות שלא קיבלו אף הזמנה.",
              "task": "חברו את restaurants ו־orders, כך שכל מסעדה תופיע גם אם אין לה הזמנות ב־2026. ספרו לכל מסעדה (`restaurant_name`) כמה הזמנות קיבלה מ־1.1.2026. הציגו רק מסעדות עם פחות מ־10 הזמנות, ומיינו מהנמוך לגבוה.",
              "explain": "כמה מסעדות יקבלו קמפיין ומי הן, ואיזו מסעדה ברשימה לא צריכה קמפיין אלא פשוט עוד לא התחילה לעבוד. האם הייתם מורידים אותה מהרשימה?",
              "answer": 6,
              "label": "כמה מסעדות",
              "hint": "איפה כותבים את התנאי על התאריך: ב־ON או ב־WHERE? ומה סופרים: COUNT(*) או עמודה מ־orders?",
              "solution": "SELECT r.restaurant_id, r.restaurant_name, COUNT(o.order_id) AS orders_2026\nFROM restaurants AS r\nLEFT JOIN orders AS o\n    ON o.restaurant_id = r.restaurant_id\n    AND o.order_date >= '20260101'\nGROUP BY r.restaurant_id, r.restaurant_name\nHAVING COUNT(o.order_id) < 10\nORDER BY orders_2026",
              "note": "6 מסעדות: Lev Hamifratz Diner (0), Modiin Greens (1), Bangkok Street ו־Taco Loco (7), Rishon Grill House (8), Burger Pier (9). Lev Hamifratz Diner נפתחה רק ב־2026-07-01, ולכן אין סיבה לקמפיין בגלל הנתונים. עם התנאי ב־WHERE היא נעלמת ומתקבלות 5. עם COUNT(*) היא מקבלת 1 במקום 0. תשובה טובה מציינת את 5 המסעדות האמיתיות, ובמיוחד את Modiin Greens עם הזמנה אחת."
            },
            {
              "title": "לקוחות שהפסיקו להזמין",
              "context": "השיווק מתכנן קמפיין \"חזרו אלינו\" ללקוחות שלא הזמינו בשלושת החודשים האחרונים של הנתונים (אפריל עד יוני 2026).",
              "task": "חברו את customers ו־orders, כך שרק הזמנות מ־1.4.2026 ואילך יתחברו ללקוח. מצאו את הלקוחות שאין להם אף הזמנה כזו. אחר כך בדקו כמה מהם לא הזמינו אף פעם, כמו בשקף \"למצוא את מה שאין\".",
              "explain": "כמה לקוחות יקבלו את הקמפיין, איזה חלק הם מכל 160 הלקוחות, וכמה מהם לא הזמינו אף פעם. האם לשלוח לשתי הקבוצות את אותה הודעה?",
              "answer": 61,
              "label": "כמה לקוחות",
              "hint": "התנאי על התאריך הוא על הטבלה הימנית, ולכן הוא שייך ל־ON. ה־IS NULL שייך ל־WHERE.",
              "solution": "SELECT c.customer_id, c.first_name, c.last_name\nFROM customers AS c\nLEFT JOIN orders AS o\n    ON o.customer_id = c.customer_id\n    AND o.order_date >= '20260401'\nWHERE o.order_id IS NULL",
              "note": "61 לקוחות, בערך 38% מהלקוחות. 7 מהם לא הזמינו אף פעם, ו־54 הזמינו בעבר והפסיקו. תשובה טובה מציעה הודעה שונה לכל קבוצה: ל־54 \"התגעגענו\", ול־7 הטבת הזמנה ראשונה. אם התנאי על התאריך נכתב ב־WHERE, מתקבלות 0 שורות."
            },
            {
              "title": "אחראים רחוקים מהשליחים",
              "context": "משאבי אנוש שוקלים למנות אחראים אזוריים, ורוצים לדעת כמה שליחים עובדים בעיר אחרת מזו של האחראי שלהם.",
              "task": "חברו את couriers לעצמה: שליח ואחראי. ספרו כמה שליחים נמצאים בעיר (`city_id`) שונה מהעיר של האחראי שלהם. אחר כך ספרו כמה שליחים כאלה יש תחת כל אחראי, עם שם האחראי.",
              "explain": "כמה שליחים עובדים רחוק מהאחראי, איזה חלק הם מ־22 השליחים שיש להם אחראי, ואצל איזה אחראי הבעיה הכי גדולה. האם לדעתכם כדאי למנות אחראים אזוריים?",
              "answer": [
                14,
                11
              ],
              "label": "שני מספרים: כל השליחים בעיר אחרת, מתוכם תחת Maya Cohen",
              "hint": "תנאי שמשווה עמודה מהעותק של השליח לעמודה מהעותק של האחראי.",
              "solution": "SELECT c.courier_id, c.first_name, c.last_name, c.city_id,\n       s.first_name AS supervisor_first_name,\n       s.last_name AS supervisor_last_name,\n       s.city_id AS supervisor_city_id\nFROM couriers AS c\nINNER JOIN couriers AS s\n    ON c.supervisor_id = s.courier_id\nWHERE c.city_id <> s.city_id\n\nSELECT s.first_name, s.last_name, COUNT(*) AS far_couriers\nFROM couriers AS c\nINNER JOIN couriers AS s\n    ON c.supervisor_id = s.courier_id\nWHERE c.city_id <> s.city_id\nGROUP BY s.courier_id, s.first_name, s.last_name",
              "note": "14 מתוך 22 שליחים, כמעט שני שלישים. Maya Cohen (תל אביב) אחראית על 11 מהם, Dana Levi על 2 ו־Yael Levi על 1. כאן INNER JOIN מתאים, כי שליח בלי אחראי לא רלוונטי לשאלה. תשובה טובה ממליצה על אחראים אזוריים, בעיקר כדי להוריד עומס מ־Maya Cohen."
            },
            {
              "title": "מי הביא את הלקוחות הכי טובים",
              "context": "השיווק כבר החליט לתת מתנה ללקוח שהמליץ על הכי הרבה לקוחות (Tamar Golan), ועכשיו רוצה לבדוק אם היה נכון יותר לתת אותה למי שהלקוחות שלו הזמינו הכי הרבה.",
              "task": "חברו את customers לעצמה (הלקוח והממליץ), ואת הלקוח הממליץ־עליו ל־orders עם LEFT JOIN. לכל ממליץ הציגו שם, כמה לקוחות הביא (`COUNT(DISTINCT ...)`), וכמה הזמנות ביצעו הלקוחות האלה ביחד. מיינו לפי מספר ההזמנות מהגבוה לנמוך.",
              "explain": "מי הממליץ שהלקוחות שלו הזמינו הכי הרבה, כמה לקוחות הוא הביא וכמה הזמנות הם ביצעו, ואיך זה משתווה ל־Tamar Golan. למי הייתם נותנים את המתנה, ולמה?",
              "answer": [
                47,
                14
              ],
              "label": "שני מספרים: ההזמנות של הממליץ המוביל, ההזמנות של הלקוחות של Tamar Golan",
              "hint": "LEFT JOIN ל־orders, כדי שלקוח שהגיע בהמלצה ולא הזמין ייספר כ־0 ולא ייעלם.",
              "solution": "SELECT ref.customer_id, ref.first_name, ref.last_name,\n       COUNT(DISTINCT c.customer_id) AS referred_count,\n       COUNT(o.order_id) AS referred_orders\nFROM customers AS c\nINNER JOIN customers AS ref\n    ON c.referred_by = ref.customer_id\nLEFT JOIN orders AS o\n    ON o.customer_id = c.customer_id\nGROUP BY ref.customer_id, ref.first_name, ref.last_name\nORDER BY referred_orders DESC",
              "note": "Moshe Mizrahi (לקוח 13) הביא 2 לקוחות שהזמינו 47 פעמים. Sivan Golan (39) קרובה, עם 2 לקוחות ו־46 הזמנות. Tamar Golan הביאה 3 לקוחות, אבל הם הזמינו רק 14 פעמים. תשובה טובה מבחינה בין כמות הלקוחות לערך שלהם, וממליצה לתגמל לפי הזמנות, או לפחות לשקול את שני המדדים."
            }
          ]
        }
      ]
    },
    {
      "n": 17,
      "title": "תתי־שאילתות",
      "slides": "https://docs.google.com/presentation/d/e/2PACX-1vSpSgXk841hNdwDkKYAbmlm9mBgEH4z0cyaTcQAuBcsCBWywivGJRRTzMESnIeDhijysA-tmb0gMbAY/pubembed?start=false&loop=false&delayms=3000&slide=id.h2890581bcbdd8d51_19_385",
      "deckPages": [
        161,
        167
      ],
      "practices": [
        {
          "id": "17-1",
          "kind": "lesson",
          "title": "תרגול: בקשות מהצוות",
          "intro": "כל בקשה דורשת תת־שאילתה אחת לפחות. כתבו את השאילתה ב־SSMS והקלידו כאן את מה שקיבלתם.",
          "questions": [
            {
              "q": "מנהל התפריט: \"מה המנה הכי יקרה בתפריט?\" (בלי TOP)",
              "answer": 1,
              "unit": "שורות",
              "solution": "SELECT item_name, price\nFROM menu_items\nWHERE price = (SELECT MAX(price)\n               FROM menu_items)",
              "note": "Kebab Plate, 86.00. אפשר גם עם TOP 1 ו־ORDER BY. היתרון של תת־השאילתה: אם שתי מנות חולקות את המחיר הגבוה, שתיהן יופיעו, כמו WITH TIES."
            },
            {
              "q": "מנהלת התפעול: \"אילו מסעדות מכינות לאט יותר מהממוצע?\" (`avg_prep_minutes`)",
              "answer": 15,
              "unit": "שורות",
              "solution": "SELECT restaurant_name, avg_prep_minutes\nFROM restaurants\nWHERE avg_prep_minutes > (SELECT AVG(avg_prep_minutes)\n                          FROM restaurants)",
              "note": "avg_prep_minutes היא INT, ולכן הממוצע נחתך ל־14 (האמיתי 14.43). כאן זה לא משנה את התוצאה: העמודה שלמה, ו\"גדול מ־14\" זהה ל\"גדול מ־14.43\"."
            },
            {
              "q": "השיווק: \"אילו לקוחות גרים במחוז הדרום (`district = 'South'`)?\"",
              "answer": 24,
              "unit": "שורות",
              "solution": "SELECT customer_id, first_name, last_name\nFROM customers\nWHERE city_id IN (SELECT city_id\n                  FROM cities\n                  WHERE district = 'South')"
            },
            {
              "q": "מנהל האזור: \"כמה הזמנות קיבלו המסעדות שנמצאות בחיפה (`city_id = 5`)?\"",
              "answer": 237,
              "label": "הערך שקיבלתם",
              "solution": "SELECT COUNT(*) AS orders_count\nFROM orders\nWHERE restaurant_id IN (SELECT restaurant_id\n                        FROM restaurants\n                        WHERE city_id = 5)",
              "note": "בחיפה יש 4 מסעדות (16, 17, 18, 30), ולכן צריך IN ולא =. מסעדה 30 נפתחה אחרי סוף הנתונים ואין לה הזמנות."
            }
          ]
        },
        {
          "id": "17-2",
          "kind": "lesson",
          "title": "מצאו את הטעות",
          "intro": "לכל שאילתה: מה יקרה כשנריץ אותה, ואיך מתקנים?",
          "questions": [
            {
              "q": "ההזמנות של המסעדות בחיפה:<br>`SELECT order_id FROM orders WHERE restaurant_id = (SELECT restaurant_id FROM restaurants WHERE city_id = 5)`",
              "solution": "SELECT order_id\nFROM orders\nWHERE restaurant_id IN (SELECT restaurant_id\n                        FROM restaurants\n                        WHERE city_id = 5)",
              "note": "שגיאה: תת־השאילתה מחזירה 4 ערכים, ו־= יודע להשוות רק לערך אחד. התיקון: IN במקום =. אחרי התיקון: 237 שורות."
            },
            {
              "q": "מנות יקרות מהממוצע:<br>`SELECT item_name FROM menu_items WHERE price > AVG(price)`",
              "solution": "SELECT item_name\nFROM menu_items\nWHERE price > (SELECT AVG(price)\n               FROM menu_items)",
              "note": "שגיאה: פונקציית סיכום ב־WHERE (פרק 14). התיקון: תת־שאילתה שמחשבת את הממוצע. אחרי התיקון: 91 שורות."
            }
          ]
        },
        {
          "id": "17-self",
          "kind": "self",
          "title": "תרגול עצמאי: פרק 17",
          "intro": "בכל השאלות האלה משווים לערך שמחושב מהנתונים, או לרשימה שמחושבת מהנתונים. לכל שאלה כתבו שאילתה, ובנוסף תשובה במילים שמנהל שלא יודע SQL יבין: מה המספרים, מה הם אומרים, ומה אתם ממליצים.",
          "questions": [
            {
              "title": "מסעדות מעל הממוצע",
              "context": "ההנהלה רוצה לדעת כמה מהמסעדות מקבלות יותר הזמנות מהממוצע למסעדה, כדי להחליט אם הבעיה היא בכמה מסעדות חלשות או ברוב המסעדות.",
              "task": "בטבלת orders, ספרו לכל מסעדה (`restaurant_id`) כמה הזמנות קיבלה. הציגו רק מסעדות שמספר ההזמנות שלהן גדול מהממוצע למסעדה. את הממוצע חשבו בתת־שאילתות: מספר כל ההזמנות, חלקי מספר המסעדות השונות בטבלת orders.",
              "explain": "מה הממוצע למסעדה, כמה מסעדות מעליו וכמה מתחתיו (מתוך 29 מסעדות עם הזמנות). מה זה אומר: האם רוב המסעדות \"ממוצעות\"? מה הייתם ממליצים להנהלה?",
              "answer": 11,
              "label": "כמה מסעדות",
              "hint": "אפשר לחלק תת־שאילתה אחת בתת־שאילתה אחרת. אסור לכתוב AVG(COUNT(*)).",
              "solution": "SELECT restaurant_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY restaurant_id\nHAVING COUNT(*) > (SELECT COUNT(*) FROM orders)\n                 / (SELECT COUNT(DISTINCT restaurant_id) FROM orders)",
              "note": "הממוצע הוא 1250 חלקי 29, כלומר 43 בחלוקת מספרים שלמים (האמיתי 43.1, וזה לא משנה כאן). 11 מסעדות מעל הממוצע, ו־18 מתחתיו. כמה מסעדות גדולות (16 עם 84, 17 עם 83) מושכות את הממוצע למעלה, ולכן רוב המסעדות מתחתיו. תשובה טובה מציינת שהבעיה היא ברוב המסעדות, לא בכמה בודדות, ושהממוצע מטעה כשיש כמה מסעדות גדולות מאוד."
            },
            {
              "title": "משלוח חינם להזמנות גדולות",
              "context": "הכספים שוקלים לתת משלוח חינם לכל הזמנה שהסכום שלה גבוה מסכום ההזמנה הממוצע, וצריכים לדעת כמה הזמנות היו מקבלות את ההטבה.",
              "task": "בטבלת `order_items`, חשבו לכל הזמנה את הסכום שלה (quantity כפול `unit_price`). הציגו רק הזמנות שהסכום שלהן גדול מסכום ההזמנה הממוצע. את הממוצע חשבו בתת־שאילתה: סך כל הסכומים חלקי מספר ההזמנות השונות. בשאילתה נפרדת הריצו את תת־השאילתה לבד כדי לראות את הממוצע.",
              "explain": "מה סכום ההזמנה הממוצע, כמה הזמנות מעליו, ואיזה חלק הן מכל 1250 ההזמנות. האם ההטבה זולה או יקרה לחברה?",
              "answer": 513,
              "label": "כמה הזמנות",
              "solution": "SELECT SUM(quantity * unit_price) / COUNT(DISTINCT order_id) AS avg_order_total\nFROM order_items\n\nSELECT order_id, SUM(quantity * unit_price) AS order_total\nFROM order_items\nGROUP BY order_id\nHAVING SUM(quantity * unit_price) > (SELECT SUM(quantity * unit_price) / COUNT(DISTINCT order_id)\n                                     FROM order_items)",
              "note": "הממוצע הוא כ־90.26 שקל (unit_price היא DECIMAL, ולכן אין חיתוך). 513 הזמנות מעליו, כ־41% מההזמנות. כלומר, כמעט כל הזמנה שנייה הייתה מקבלת משלוח חינם. תשובה טובה מציינת שזו הטבה יקרה, ואולי ממליצה על סף גבוה יותר."
            },
            {
              "title": "לקוחות שעוד לא השתמשו בקופון",
              "context": "השיווק רוצה לשלוח קופון ראשון ללקוחות פעילים שאף פעם לא השתמשו בקופון, כדי לבדוק אם קופון יגרום להם להזמין יותר.",
              "task": "מטבלת customers, מצאו לקוחות שהזמינו לפחות פעם אחת (`customer_id` נמצא ב־orders), ושאף אחת מההזמנות שלהם לא כללה קופון (`customer_id` לא נמצא בהזמנות שבהן `coupon_id` לא ריק). השתמשו בשתי תתי־שאילתות.",
              "explain": "כמה לקוחות יקבלו קופון ראשון, ואיזה חלק הם מ־153 הלקוחות שהזמינו. מה קורה אם שוכחים את התנאי \"הזמינו לפחות פעם אחת\", ולמה זה משנה לשיווק?",
              "answer": 50,
              "label": "כמה לקוחות",
              "hint": "IN לתנאי הראשון, NOT IN לשני. האם יש NULL ברשימה של NOT IN?",
              "solution": "SELECT customer_id, first_name, last_name\nFROM customers\nWHERE customer_id IN (SELECT customer_id\n                      FROM orders)\n  AND customer_id NOT IN (SELECT customer_id\n                          FROM orders\n                          WHERE coupon_id IS NOT NULL)",
              "note": "50 לקוחות, כשליש מ־153 הלקוחות שהזמינו. בלי התנאי הראשון מתקבלים 57: נוספים 7 הלקוחות שלא הזמינו אף פעם, וזו קבוצה אחרת עם צורך אחר. NOT IN בטוח כאן, כי customer_id ב־orders לא יכול להיות NULL. תשובה טובה מציינת את 50, ומסבירה למה לא לערבב את ה־7."
            },
            {
              "title": "מסעדות עמוסות עם דירוג נמוך",
              "context": "מחלקת האיכות רוצה להתחיל תוכנית שיפור במסעדות שיש להן הרבה ביקורות, אבל הדירוג הממוצע שלהן נמוך מהדירוג הממוצע של כל החברה.",
              "task": "חברו את reviews, orders ו־restaurants. לכל מסעדה (`restaurant_name`) חשבו את הדירוג הממוצע (rating) ואת מספר הביקורות. הציגו רק מסעדות עם לפחות 20 ביקורות, שהדירוג הממוצע שלהן נמוך מהדירוג הממוצע של כל הביקורות בחברה (תת־שאילתה). rating היא INT: השתמשו ב־1.0 גם בממוצע של המסעדה וגם בתת־השאילתה.",
              "explain": "מה הדירוג הממוצע של החברה, כמה מסעדות נכנסות לתוכנית ומה הדירוג של כל אחת. מה מפתיע ברשימה, אם משווים לרשימת המסעדות העמוסות מפרק 15?",
              "answer": 4,
              "label": "כמה מסעדות",
              "hint": "בלי 1.0 גם הממוצע של החברה וגם הממוצעים של המסעדות נחתכים למספר שלם. נסו ותראו כמה מסעדות נעלמות.",
              "solution": "SELECT r.restaurant_name,\n       AVG(1.0 * rv.rating) AS avg_rating,\n       COUNT(*) AS review_count\nFROM reviews AS rv\nINNER JOIN orders AS o\n    ON rv.order_id = o.order_id\nINNER JOIN restaurants AS r\n    ON o.restaurant_id = r.restaurant_id\nGROUP BY r.restaurant_name\nHAVING COUNT(*) >= 20\n   AND AVG(1.0 * rv.rating) < (SELECT AVG(1.0 * rating)\n                               FROM reviews)",
              "note": "הדירוג הממוצע של החברה הוא כ־4.30. 4 מסעדות: Masala Express (3.68), Ashdod Sushi (3.96), Netanya Wok (4.04), Port Noodles (4.09). בלי 1.0 הממוצע של החברה נחתך ל־4, והמסעדות ל־3 או 4, ולכן נשארות רק 2 (Masala Express ו־Ashdod Sushi). ההפתעה: Port Noodles היא השנייה בכמות ההזמנות, ו־Ashdod Sushi השלישית ועם הכי הרבה ביטולים. תשובה טובה ממליצה להתחיל דווקא במסעדות העמוסות, כי שם השיפור ישפיע על הכי הרבה לקוחות."
            }
          ]
        }
      ],
      "extras": [
        {
          "q": "מנהלת התפעול: \"אילו משלוחים לקחו יותר מזמן המשלוח הממוצע?\"",
          "answer": 505,
          "unit": "שורות",
          "solution": "SELECT order_id, delivery_minutes\nFROM orders\nWHERE delivery_minutes > (SELECT AVG(delivery_minutes)\n                          FROM orders)",
          "note": "הממוצע נחתך ל־35 (האמיתי 35.07). התוצאה לא משתנה: delivery_minutes שלם, ו\"גדול מ־35\" זהה ל\"גדול מ־35.07\"."
        }
      ]
    }
  ],
  "extrasPage": "extras.html",
  "schemaPage": "schema.html",
  "teacherGuide": "https://docs.google.com/document/d/1-7Wiy98isHlL-9-NVlWb1Kkh0YKkFKcBqGAKCTH1ilg/edit?usp=sharing"
};
