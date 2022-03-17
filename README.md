# personio
<div id="main-wrapper">

<header id="header" class="sticky-top">

<nav class="primary-menu navbar navbar-dark">

![قالب بيرسونيو](assets/imgs/logo-light-ar.svg)
![قالب بيرسونيو](assets/imgs/logo-dark-ar.svg)
![قالب بيرسونيو](assets/imgs/logo-outline-ar.svg)

<div class="container-fluid"><span class="text-2 ml-2">الإصدار 1.0</span> </div>

</nav>

</header>

### - [Demo](https://prrsonio.amers.app)
### - [رابط التوثيق](https://prrsonio-doc.amers.app)


<div id="content" role="main">

<div class="idocs-navigation bg-dark docs-navigation-dark">

*   [البدء](#idocs_start)
    *   [التثبيت](#idocs_installation)
    *   [بنية القالب](#idocs_html_structure)
*   [تخطيط القالب](#idocs_layout)
    *   [إعدادات الشعار](#idocs_logo_settings)
    *   [الشريط العلوي](#idocs_navbar)
    *   [القسم العلوي](#idocs_landing)
    *   [قسم الخدمات](#idocs_service)
    *   [قسم تواصل معي](#idocs_contactMe)
    *   [المدونة](#idocs_blog)
    *   [اخر المشاريع](#idocs_lastProj)
    *   [مهاراتي](#idocs_mySkills)
    *   [شركاء النجاح](#idocs_partners)
    *   [اراء العملاء](#idocs_comments)
    *   [نموذج الإتصال](#idocs_contactForm)
    *   [التذييل](#idocs_footer)
*   [التراخيص والاعتمادات](#idocs_source_credits)
    *   [الصور](#idocs_fotos)
    *   [الخطوط والايقونات](#idocs_fonts)
    *   [شفرات جافاسكربت](#idocs_js)

</div>

<div class="idocs-content">

<div class="container">

<section id="idocs_start">

# دليل المستخدم

## قالب بيرسونيو الشخصي

شكرا جزيلا لشرائك قالب بريسونيو عبر بيكاليكا

* * *

<div class="row">

<div class="col-sm-6 col-lg-4">

*   **الإصدار:** 1.0
*   **الكاتب:** [عامر مالك محمد](https://www.amer.website)

</div>

<div class="col-sm-6 col-lg-4">

*   **تاريخ الإصدار:** 16 مارس 2022
*   **آخر تحديث:** 16 مارس 2022

</div>

</div>

إذا كانت لديك أي أسئلة خارج نطاق ملف المساعدة هذا ، فلا تتردد في إرسال بريد إلكتروني عبر [صفحة الدعم الفني](https://picalica.com/u/ameralrawi).

</section>

* * *

<section id="idocs_installation">

## التثبيت

قالب بيرسونيو قالب HTML ثابت "ستاتيكي" بعد تعديله حسب إحتياجك يمكنك رفعه على أي استضافة بشكل مباشر ومن ثم طلب المسار الذي يتواجد عليه ملف index.html

### خطوات تثبيت القالب

1.  قم بفك الضغط عن الملف المضغوط **personio.zip**
2.  بعد فك الضغط سيظهر لنا مجلد personio والذي يحتوي على الملفين index.html و index_ar.html والمجلد assets
    *   `personio/assets` - يحتوي على المجلدات التالية :
        *   `personio/css` -مجلد ملفات التنسيقات
        *   `personio/imgs` - مجلد الصور
        *   `personio/js` - مجلد ملفات جافاسكربت
        *   `personio/webfonts` – مجلد الخطوط
    *   `personio/index.html` - النسخة الإنجليزية
    *   `personio/index_ar.html` - النسخة العربية
3.  يجب رفع ملفات جميع الملفات إلى الإستضافة

</section>

* * *

<section id="idocs_html_structure">

## بنية القالب

يتبع Personio بنية تشفير بسيطة وسهلة التخصيص. هذه هي هيكلية القالب يمكنك الرجوع اليها دوما:  
القالب مبني على اخر اصدار من اطار عمل [بوتستراب](https://getbootstrap.com/)

                           <!DOCTYPE html>
    <html lang="en">
    <head>

    <!--  عنوان الموقع، الوصف، صفحات التنسيقات والخطوط
    ============================================= -->

    </head>

    <body>

    <!-- القائمة الرئيسية
    =============================== -->
    <nav id="navBar">
    </nav>
    <!-- نهاية القائمة الرئيسية
    =============================== -->
    <!-- القسم الرئيسي
    =============================== -->
    <section id="landing">
    </section>
    <!-- نهاية القسم الرئيسي
    =============================== -->
    <!-- قسم الخدمات
    =============================== -->
    <section id="features">
    </section>
    <!-- نهاية قسم الخدمات
    =============================== -->
    <!-- قسم طرق التواصل
    =============================== -->
    <section id="service">
    </section>
    <!-- نهاية قسم طرق التواصل
    =============================== -->
    <!-- المدونة
    =============================== -->
    <section id="blog">
    </section>
    <!-- نهاية المدونة
    =============================== -->
    <!-- قسم ملف الأعمال
    =============================== -->
    <section id="Portfolio">
    </section>
    <!-- نهاية قسم ملف الاعمال
    =============================== -->
    <!-- قسم المهارات
    =============================== -->
    <section class="my-skills">
    </section>
    <!-- نهاية قسم المهارات
    =============================== -->
    <!-- قسم شعارات الشركاء
    =============================== -->
    <section class="client-section text-center pb-5">
    </section>
    <!-- نهاية قسم شعارات الشركاء
    =============================== -->
    <!-- القسم آراء العملاء
    =============================== -->
    <section class="customers-section">
    </section>
    <!-- نهاية قسم آراء العملاء
    =============================== -->
    <!-- قسم نموذج الإتصال
    =============================== -->
    <section id="Contact">
    </section>
    <!-- نهاية قسم نموذج الإتصال
    =============================== -->
    <!-- التذييل / الفوتر -->
    <footer>
    </footer>
    <!-- نهاية التذييل -->

    <!-- ملفات جافاسكربت -->
    </body>
    </html>

إذا كنت بحاجة إلى مزيد من المعلومات ، فيرجى زيارة موقع [bootstrap](https://getbootstrap.com/docs/4.4/layout/grid/)

</section>

* * *

<section id="idocs_logo_settings">

## إعدادات الشعار

![logo-image](assets/imgs/documentation/img.png)

يمكن إيجاد حاوية الشعار ضمن العنصر`<nav>`

                <!--logo start-->
                <img loading="lazy" class="light-logo" src="assets/imgs/logo-light-ar.svg" alt="logo">
                <img loading="lazy" class="dark-logo d-none" src="assets/imgs/logo-dark-ar.svg" alt="logo">
                <span class="d-block text-capitalize">شعاري</span>
                <!--logo end-->

كما تلاحظ هناك شعارين احدهما غامق والآخر فاتح، يتم إستيراد الشعارات من مجلد imgs. إضافة إلى الشعارات فإن هناك عنصر span يحتوي على العبارة اسفل الشعار.

</section>

* * *

<section id="idocs_navbar">

## الشريط العلوي الأساسي

![logo-image](assets/imgs/documentation/img.png)

للتعديل على محتوى الشريط العلوي يمكن إيجاد الشريط العلوي ضمن العنصر nav ايضا

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                        <a class="nav-link p-lg-3 p-2 active" aria-current="page" href="#landing">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-lg-3 p-2" href="#features">مميزات</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-lg-3 p-2" href="#service">خدماتي</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-lg-3 p-2" href="#blog">المدونة</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-lg-3 p-2" href="#Portfolio">المعرض</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-lg-3 p-2" href="#skills">عنّي</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-lg-3 p-2" href="#Contact">إتصل بي</a>
                    </li>
                </ul>

</section>

* * *

<section id="idocs_landing">

## القسم العلوي الأساسي

![landing-image](assets/imgs/documentation/img_1.png)

للتعديل على محتوى القسم العلوي الأساسي قم بتغيير المحتوى ضمن القسم التالي

    <section id="landing" class="landing d-flex justify-content-center align-items-center">
        <div class="content-container text-center">
            <h1 class="fw-bold">مرحبًا ، أنا موظفك القادم</h1>
            <p class="fs-5 mx-auto w-75 w-md-50 mb-5">اسمي جون ديو ، وأنا مصمم متعدد التخصصات ، أركز على
                تقاطعات البساطة والفضاء السلبي في العالم الرقمي.</p>
            <a class="btn btn-primary custom-btn rounded-pill fs-3" href="#">وظفني!</a>
        </div>
    </section>

لتغيير صورة الخلفية يجب الذهاب إلى ملف personio.css المتواجد ضمن المسار التالي`personio/css`

ثم قم بتعديل مسار الصورة ضمن background-image

    .landing::before {
        ....
        background-image: url("../imgs/portrait.svg");
        ....
    }

</section>

* * *

<section id="idocs_service">

## قسم الخدمات

![service-image](assets/imgs/documentation/img_2.png)

للتعديل على محتوى قسم الخدمات قم بتغيير المحتوى ضمن القسم التالي

    <section id="features" class="features text-center">
        <div class="container py-5">
            <div class="main-title pt-5 my-5 position-relative">
                <h2 class="mt-5 text-uppercase">أنا اقدّم لك</h2>
                <p class="text-uppercase">الخدمات التالية</p>
            </div>
              ..........
                <div class="col-md-6 col-lg-4 service-card mb-2">
                    <div class="feat">
                        <div class="icon-holder position-relative">
                            <i class="fa-solid fa-6 position-absolute bottom-0 service-count"></i>
                            <i class="fa-solid fa-chess-bishop fa-4x position-absolute bottom-0 service-icon"></i>
                        </div>
                        <h4 class="my-3 text-uppercase">تخطيط</h4>
                        <p class="service-description lh-lg"> لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.</p>
                    </div>
                </div>
             ..........
            </div>
        </div>
    </section>

</section>

* * *

<section id="idocs_contactMe">

## قسم تواصل معي

![contactMe-image](assets/imgs/documentation/img_3.png)

للتعديل على محتوى قسم تواصل معي قم بتغيير المحتوى ضمن القسم التالي

    <section id="service" class="contact-options-section text-center py-5">
        <div id="contact-options" class="container py-5">
            <div class="main-title my-5 py-5 position-relative">
                <h2 class="mt-5 text-uppercase">تواصل معي</h2>
                <p class="text-uppercase">أنا متاح على المنصات التالية</p>
            </div>
            <div class="row mb-5">
                .......
                <div class="col-6 platforms">
                    <a href="https://mostaql.com/" target="_blank">
                        <img loading="lazy" src="assets/imgs/icons/mostaql-logo-white.svg" alt="platform-logo">
                    </a>
                    .......
                </div>
                .......
                <div class="col-12">
                    <h2 class="mt-5 text-uppercase fs-4">خيارات الاتصال الأخرى</h2>
                    <a href="mailto:info@example.com" id="contact-icon"
                       class="btn btn-primary custom-btn rounded-pill text-uppercase fs-3 me-0 me-md-2 mb-1 mb-sm-0">بريد الكتروني</a>
                    <a href="" id="Whatsapp" class="btn btn-primary whatsapp-btn rounded-pill text-uppercase fs-3">واتساب</a>
                </div>
            </div>
        </div>
    </section>

لإضافة رقم واتساب الخاص بك يجب التوجه إلى ملف main.js الموجود ضمن المسار التالي `personio/js`

ثم تعديل الكود التالي حيث يتم تبديل الأصفار برقم واتساب بالإضافة إلى مفتاح الدولة:

    $('#Whatsapp').attr('href', 'https://api.whatsapp.com/send?phone=0000000000&amp;text=Hi, I got this phone number from you website');

</section>

* * *

<section id="idocs_blog">

## قسم المدونة

![blog-image](assets/imgs/documentation/img_4.png)

للتعديل على محتوى قسم المدونة قم بتغيير المحتوى ضمن القسم التالي

    <section id="blog" class="blog text-center mb-5">
        <div class="main-title my-5 position-relative">
            <h2 class="mt-5 text-uppercase">المدونة</h2>
            <p class="text-uppercase">إقرأ آخر المقالات</p>
        </div>
        <div class="container">
            <div class="row mx-auto">
                .....
                <div class="col-12 col-md-6 col-lg-3 mb-3">
                    <div class="card">
                        <img loading="lazy"  src="https://picsum.photos/id/2/400/200" class="card-img-top" alt="post-image">
                        <div class="card-body">
                            <h5 class="card-title">المقال الثاني</h5>
                            <p class="card-text">ن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.</p>
                            <button type="button" class="btn btn-primary custom-btn rounded-pill text-uppercase" data-bs-toggle="modal" data-bs-target="#blog2" >إقرأ المزيد!</button>
                            <!-- Modal -->
                            <div class="modal fade" id="blog2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="postTitle2" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <img loading="lazy"  src="https://picsum.photos/id/2/400/200" class="img-fluid" alt="post-image">
                                            <h5 class="modal-title" id="postTitle2">المقال الثاني</h5>
                                        </div>
                                        <div class="modal-body">
                                            ن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary custom-btn rounded-pill text-uppercase" data-bs-dismiss="modal">إغلاق</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               .....
            </div>
        </div>
    </section>

</section>

* * *

<section id="idocs_lastProj">

## قسم آخر المشاريع

![lastProj-image](assets/imgs/documentation/img_5.png)

للتعديل على محتوى قسم آخر المشاريع قم بتغيير المحتوى ضمن القسم التالي

    <section id="Portfolio" class="portfolio text-center py-5">
        <div id="portfolio-gallery" class="container py-5">
            <div class="main-title my-5 py-5 position-relative">
                <h2 class="mt-5 text-uppercase">آخر المشاريع</h2>
                <p class="text-uppercase">تحقق من مشاريعي الأخيرة!</p>
            </div>
            <ul class="list-unstyled work-type-list d-flex justify-content-center my-5">
                <li class="active">الكل</li>
                <li>تصميم</li>
                <li>تطوير</li>
                <li>تصوير</li>
                <li>تطبيقات</li>
            </ul>
            <div id="gallery-container" class="row mx-auto">
                ........
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box mb-3" data-work="تصميم">
                        <img loading="lazy"  src="https://picsum.photos/id/30/400" alt="example work" class="img-fluid">
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box mb-3" data-work="تصوير">
                        <img loading="lazy"  src="https://picsum.photos/id/40/400" alt="example work" class="img-fluid">
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box mb-3" data-work="تطوير">
                        <img loading="lazy"  src="https://picsum.photos/id/50/400" alt="example work" class="img-fluid">
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box mb-3" data-work="تطبيقات">
                        <img loading="lazy"  src="https://picsum.photos/id/60/400" alt="example work" class="img-fluid">
                    </div>
                </div>
                ........
            </div>
            <div class="d-flex justify-content-center mt-5">
                <button id="loadMore" class="btn btn-primary custom-btn rounded-pill text-uppercase d-flex  fs-3"
                        onclick="loadMore();">إعرض المزيد
                </button>
                <button id="loadLess" class="btn btn-primary custom-btn rounded-pill text-uppercase d-none  fs-3"
                        onclick="loadLess()">إعرض أقل
                </button>
            </div>
        </div>
    </section>

</section>

* * *

<section id="idocs_mySkills">

## قسم مهاراتي

![mySkills-image](assets/imgs/documentation/img_6.png)

للتعديل على محتوى قسم مهاراتي قم بتغيير المحتوى ضمن القسم التالي، قم بتغيير مستوى المهارة من خلال تغيير قيمة data-value

    <section class="my-skills text-center">
        <div id="skills" class="container py-5">
            <div class="main-title my-5 pt-5 position-relative">
                <h2 class="mt-5 text-uppercase">مهاراتي</h2>
                <p class="text-uppercase">لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار</p>
            </div>
            <div class="row" data-aos="zoom-in">
                <span class="d-none progress-bar-color-control"></span>
                <div class="col-4 col-lg-2 mb-3">
                    <div class="skill" data-value="88" id="firstSkill"></div>
                </div>
                <div class="col-4 col-lg-2 mb-3">
                    <div class="skill" data-value="79" id="SecondSkill"></div>
                </div>
                .....
            </div>
        </div>
    </section>

لتغيير اسماء المهارات يجب التعديل على ملف main.js الموجود ضمن المسار التالي`personio/js`

ثم تعديل الكود التالي حيث يتم اضافة المهارات ضمن مصفوفة المهارات

    let skillList = ['Html', 'Css', 'js', 'Saas', 'NodeJS', 'PHP'];

</section>

* * *

<section id="idocs_partners">

## قسم شركاء النجاح

![partners-image](assets/imgs/documentation/img_7.png)

للتعديل على محتوى قسم شركاء النجاح قم بتغيير المحتوى ضمن القسم التالي

**ملاحظة مهمة: لكي يعمل شريط العرض بشكل صحيح يجب ان يتم إضافة الشعارات مرتين، على سبيل المثال: عندما يكون لدينا 5 شعارات يتم اضافتهم ومن ثم نسخهم ولصقهم مباشرة فيكون العدد 10 شعارات.**

    <section class="client-section text-center pb-5" dir="ltr">
        <div id="Clients" class="container">
            <div class="main-title position-relative">
                <h2 class="py-5 text-uppercase">شركاء النجاح</h2>
            </div>
            <div class="row">
                <div class="slides-main-container">
                    <div class="slides-holder">
                            .....
                        <div class="slider-item">
                            <img loading="lazy" src="assets/imgs/icons/vue.svg" alt="client-logo"/>
                        </div>
                        <div class="slider-item">
                            <img loading="lazy" src="assets/imgs/icons/github.svg" alt="client-logo"/>
                        </div>
                            .....
                    </div>
                </div>
            </div>
        </div>
    </section>

لكي يعمل الشريط بالشكل المطلوب يجب التعديل على ملف personio.css الموجود ضمن مجلد`personio/css`

    .slides-main-container .slides-holder {
        -webkit-animation: sliding 30s linear infinite;
        animation: sliding 30s linear infinite;
        display: -webkit-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /*يجب أن يكون العرض مساويًا لناتج ضرب 250 بكمية العناصر. هنا لدينا 32 عنصر */
        width: calc(250px * 32);
    }
    ....
    ....
    ....
    @-webkit-keyframes sliding {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            /*قيمة transform يجب ان تكون ناتج ضرب 250 بنصف العدد الكلي للعناصر (الشعارات) نصف 32 = 16*/
            /*transform must be the product of 250 with half of items amount*/
            -webkit-transform: translateX(calc(-250px * 16));
            transform: translateX(calc(-250px * 16));
        }
    }

    @keyframes sliding {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            /*قيمة transform يجب ان تكون ناتج ضرب 250 بنصف العدد الكلي للعناصر (الشعارات) نصف 32 = 16*/
            /*transform must be the product of 250 with half of items amount*/
            -webkit-transform: translateX(calc(-250px * 16));
            transform: translateX(calc(-250px * 16));
        }
    }

</section>

* * *

<section id="idocs_comments">

## قسم آراء عملائي

![comments-image](assets/imgs/documentation/img_8.png)

للتعديل على محتوى قسم آراء عملائي قم بتغيير المحتوى ضمن القسم التالي

    <section class="customers-section">
        <div id="customers-section" class="container client pb-5">
            <div class="main-title mb-5 mb-2 py-5 position-relative text-center">
                <h2 class="mt-5 text-uppercase">آراء عملائي</h2>
                <p class="p-text">ماذا يقول عملائي</p>
            </div>
            <div class="row align-items-md-center">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <div class="row p-4">
                                    <div class="review-card py-4 text-center">
                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                        <p class="lh-lg mb-0">يتم عرض المراجعة هنا ... يتم عرض المراجعة هنا ... يتم إجراء المراجعة
                                            هنا ... يتم عرض المراجعة هنا ...</p>
                                        <i class="fa fa-quote-right" aria-hidden="true"></i><br>
                                    </div>
                                    <div class="row">
                                        <div class="avatar-container col-sm-2 pt-3">
                                            <img loading="lazy"  src="assets/imgs/avatars/ava10.svg"
                                                 class="rounded-circle img-responsive img-fluid" alt="client-img">
                                        </div>
                                        <div class="col-sm-10 client-info client-info-ar">
                                            <div class="arrow-down d-none d-lg-block"></div>
                                            <h4><strong>إسم العميل</strong></h4>
                                            <p class="testimonial_subtitle"><span>وظيفة العميل</span><br>
                                                <span>المشروع المنجز</span>
                                            </p>
                                        </div>
                                    </div>
                        .....
    </section>

</section>

* * *

<section id="idocs_contactForm">

## قسم إتصل بي

![contactForm-image](assets/imgs/documentation/img_9.png)

للتعديل على محتوى قسم إتصل بي قم بتغيير المحتوى ضمن القسم التالي

    <section id="Contact" class="contact-info-section py-5">
        <div class="container">
            <h2 class="main-title py-5 position-relative text-center fs-2 text-uppercase">إتصل بي</h2>
            <div id="contact-information" class="row py-5 mx-auto">
                <div class="col-12 col-lg-4 mb-1">
                    <h4 class="heading-with-border-bottom">معلومات الإتصال</h4>
                    <div id="contact-info" class="border-0">
                        <div class="info mb-2">
                           <i class="fas fa-phone fa-lg"></i>
                            <span>+00 000 0000 0000</span>
                        </div>
                        <div class="info mb-2">
                             <i class="fas fa-envelope fa-lg"></i>
                            <span>example@example.com</span>
                        </div>
                        <div class="info mb-2">
                            <i class="fas fa-map-marker-alt fa-lg"></i>
                            <span>العنوان: طريق الملك فهد، السعودية</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-8 mt-1">
                    <h4>إترك رسالة</h4>
                    <form class="row light-row" action="https://formspree.io/f/xwkavlqg" method="POST">
                        <div class="col-md-6 form-group">
                            <input class="form-control m-1" name="name" placeholder="الإسم" required="">
                        </div>
                        <div class="col-md-6 form-group">
                            <input class="form-control m-1" name="_replyto" type="email" placeholder="البريد الإلكتروني" required="">
                        </div>
                        <div class="col-12 form-group">
                            <textarea class="form-control m-1" name="message"
                                placeholder="محتوى الرسالة" required=""></textarea>
                        </div>
                        <div class="col-12 form-group m-1">
                            <button type="submit" class="btn btn-primary custom-btn text-uppercase"><span>أرسال</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

**ملاحظة مهمة جدا: لكي تصلك رسائل المستخدمين من خلال نموذج الإتصال، يجب التسجيل في موقع https://formspree.io حيث سوف تحصل بعد التسجيل على رابط خاص بك قم بنسخ الرابط الخاص بك واستبدله في الرابط الموجود ضمن action في الفورم اعلاه.**</section>

* * *

<section id="idocs_footer">

## قسم التذييل

![footer-image](./assets/imgs/documentation/img_10.png)

للتعديل على محتوى التذييل قم بتغيير المحتوى ضمن القسم التالي

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 footer-content-container d-flex">
                    <div class="left-side d-none d-md-block">
                        <a href="https://picalica.com" class="text-uppercase">إحصل على بيرسونيو</a>
                    </div>
                    <div id="copy-right-ar" class="middle-content">
                        This is my code
                    </div>
                    <div id="social-icons" class="right-side d-none d-md-block">
                        <a href="https://www.facebook.com/ameralrawi">
                            <i class="fab fa-facebook-square fa-lg"></i>
                        </a>
                        <a href="https://www.twitter.com/ameralrawi">
                            <i class="fab fa-twitter-square fa-lg"></i>
                        </a>
                        <a href="https://www.instagram.com/ameralrawi">
                            <i class="fab fa-instagram fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</section>

<section id="idocs_source_credits">

## التراخيص والإعتمادات

#### الصور:

*   Freepik - [freepik.com](https://freepik.com/)
*   Lorem Picsum - [https://picsum.photos](https://picsum.photos/)

#### الخطوط:

*   Icons Font Face - [https://fontawesome.com](https://fontawesome.com/)
*   Cairo - Google fonts - [https://fonts.google.com](https://fonts.google.com/)

#### شفرات جافاسكربت:

*   jQuery - [http://www.jquery.com/](http://www.jquery.com/)
*   Bootstrap 5 - [http://getbootstrap.com/](http://getbootstrap.com/)
*   AOS - [https://michalsnik.github.io](https://michalsnik.github.io)
*   Progress bar - [https://kimmobrunfeldt.github.io](https://michalsnik.github.io)

</section>

</div>

[](javascript:void(0) "Back to Top")</div>

</div>

</div>

![footer-image](./assets/imgs/documentation/screenshots/Screenshot%202022-03-17%20at%2007-04-13%20بيرسونيو.png)
![footer-image](./assets/imgs/documentation/screenshots/Screenshot%202022-03-17%20at%2007-05-15%20بيرسونيو.png)
![footer-image](./assets/imgs/documentation/screenshots/Screenshot%202022-03-17%20at%2007-05-40%20بيرسونيو.png)
![footer-image](./assets/imgs/documentation/screenshots/Screenshot%202022-03-17%20at%2007-07-03%20بيرسونيو.png)
![footer-image](./assets/imgs/documentation/screenshots/Screenshot%202022-03-17%20at%2007-11-07%20بيرسونيو.png)
![footer-image](./assets/imgs/documentation/screenshots/Screenshot%202022-03-17%20at%2007-16-16%20بيرسونيو.png)
