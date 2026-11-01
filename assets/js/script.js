document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. ระบบจัดการภาษา (Language Persistence)
  // ==========================================
  const dict = {
    th: {
      // Navbar
      nav_home: 'หน้าแรก',
      nav_about: 'เกี่ยวกับฉัน',
      nav_skills: 'ทักษะ & ตัวอย่างงาน',
      nav_projects: 'โปรเจกต์หลัก',
      nav_activities: 'การแข่งขัน & กิจกรรม',
      nav_exp: 'ประสบการณ์ทำงาน',
      nav_resume: 'High School',
      
      // Hero Section
      hero_status: 'พร้อมฝึกงานซัมเมอร์ มี.ค. – พ.ค.',
      hero_pill_1: 'OOP Logic • C# • JS',
      hero_pill_2: 'Figma UI/UX • 3D',
      hero_name: 'นางสาวโนรฮัสลีนาห์ ดาโอ๊ะ (โนร)',
      hero_role: 'นักศึกษาชั้นปีที่ 3 เทคโนโลยีดิจิทัลและสื่อสารการศึกษา | ม.อ.ปัตตานี',
      hero_bio: 'มีความมุ่งมั่นในการสร้างแอปมือถือ เกม 2D/AR และระบบเว็บแบบ Full-stack รวมถึงมีทักษะพื้นฐานด้าน OOP, การออกแบบ UI/UX, การทำโมเดล 3D และความสามารถด้านภาษา นอกจากนี้ยังพร้อมเรียนรู้เครื่องมือใหม่ ๆ และเติบโตไปพร้อมกับทีมเสมอ',
      hero_btn_proj: 'ดูโปรเจกต์ & งานวิจัย',
      hero_btn_gallery: 'เปิดแกลลอรีรวมผลงานทุกด้าน',
      
      // Tilt Cards (Highlights)
      hl_1: 'วิจัยเกมมือถือ 2D ระดับชาติ',
      hl_2: 'ระบบเว็บนำไปใช้จริงบนเว็บไซต์โรงเรียน 200+ คน',
      hl_3: 'ส่งมอบงานฟรีแลนซ์ 25+ ชิ้น',
      hl_4: 'รางวัลประกวดนวัตกรรม',
      
      // About Section
      about_title: 'เกี่ยวกับฉัน',
      about_p1: 'สวัสดีค่ะ ดิฉันเป็นนักศึกษาปี 3 ที่รักการพัฒนาซอฟต์แวร์ สร้างเกม และออกแบบ UI/UX โดยมีพื้นฐานด้าน OOP และประสบการณ์ทำเว็บแอปพลิเคชันกับเกม เป็นคนเรียนรู้ไว มีความรับผิดชอบ และทำงานเป็นทีมได้ดี จึงอยากหาโอกาสฝึกงานในตำแหน่ง Mobile หรือ Web Developer เพื่อนำความรู้มาใช้และเก็บเกี่ยวประสบการณ์จากการทำงานจริงค่ะ',
      lbl_fullname: 'ชื่อ-นามสกุล:',
      val_fullname: 'นางสาวโนรฮัสลีนาห์ ดาโอ๊ะ',
      lbl_phone: 'เบอร์โทรศัพท์:',
      lbl_loc: 'ที่อยู่ปัจจุบัน:',
      val_loc: 'จังหวัด ยะลา',
      fw_mini_title: 'Fastwork Verified Freelancer',
      fw_mini_desc: '25+ ออเดอร์สำเร็จ 100% • ลูกค้าจ้างซ้ำ 15 ครั้ง',
      
      // Education Section
      edu_title: 'ประวัติการศึกษา',
      edu_1_period: '2567 – ปัจจุบัน (คาดว่าจบ 2570)',
      edu_1_school: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี',
      edu_1_major: 'คณะศึกษาศาสตร์ สาขาวิชาเทคโนโลยีดิจิทัลและสื่อสารการศึกษา',
      edu_1_detail: 'ศึกษาด้านการพัฒนาซอฟต์แวร์และเว็บแอปพลิเคชัน การเขียนโปรแกรมเชิงวัตถุ (OOP) ระบบฐานข้อมูล นวัตกรรมเกมและ AR เพื่อการศึกษา และการออกแบบ UI/UX',
      edu_2_period: 'มัธยมศึกษาตอนปลาย (ม.4 – ม.6)',
      edu_2_school: 'โรงเรียนรามันห์ศิริวิทย์ จ.ยะลา',
      edu_2_major: 'แผนการเรียน วิทยาศาสตร์ – คณิตศาสตร์',
      edu_2_detail: 'หัวหน้าทีมพัฒนาโครงงานซอฟต์แวร์ระบบสารสนเทศผู้เรียน (รางวัลเหรียญทองระดับชาติ) นักเรียนสร้างชื่อเสียงยอดเยี่ยมของโรงเรียน และตัวแทนแข่งขันตอบปัญหา IT',
      edu_3_period: 'มัธยมศึกษาตอนต้น (ม.1 – ม.3)',
      edu_3_school: 'โรงเรียนรามันห์ศิริวิทย์ จ.ยะลา',
      edu_3_detail: 'เริ่มต้นฝึกฝนทักษะคอมพิวเตอร์ การสร้างเว็บไซต์เบื้องต้น และได้รับรางวัลเหรียญทองการแข่งขันต่อคำศัพท์ภาษาอังกฤษ (Crossword)',
      
      // Skills Section
      skill_tag: 'HARD SKILLS & VISUAL PROOF',
      skill_heading: 'ทักษะและความสามารถ',
      skill_sub: 'แบ่งหมวดหมู่ตามความถนัดจริง คลิกที่การ์ดเพื่อเปิดดูแกลลอรีผลงานของแต่ละทักษะได้ทันทีค่ะ',
      btn_open_all_gallery: 'ดูแกลลอรีรวมทั้งหมด',
      box_lang: 'Programming Languages',
      box_tools: 'Tools & Software',
      hs_1_title: 'Tech & Software',
      hs_2_title: 'Graphics & UI/UX',
      hs_3_title: 'Localization',
      
      // Soft Skills
      soft_heading: 'ทักษะการทำงานร่วมกับทีม',
      soft_desc: 'ทัศนคติในการทำงานที่สั่งสมจากการเป็นหัวหน้าโปรเจกต์ ประธานรับน้อง งานฟรีแลนซ์ และงานพาร์ทไทม์',
      sf_1: 'การทำงานร่วมกับผู้อื่น',
      sf_2: 'ภาวะผู้นำ',
      sf_3: 'การสื่อสารชัดเจน',
      sf_4: 'การแก้ปัญหาเฉพาะหน้า',
      sf_5: 'พร้อมเรียนรู้และทดลอง Tools ใหม่ๆ เสมอ',
      sf_6: 'การปรับตัวไว',
      sf_7: 'การบริหารเวลาและส่งงานตรงกำหนด',
      
      // Projects Section
      proj_tag: 'CORE SOFTWARE PROJECTS & RESEARCH',
      proj_heading: 'โปรเจกต์พัฒนาซอฟต์แวร์และงานวิจัย',
      flt_all: 'ทั้งหมด (4)',
      role_lbl: 'บทบาท:',
      p1_title: 'การพัฒนาเกมออนไลน์ 2 มิติ (ENPLACE) – งานวิจัยระดับชาติ NICE 2026',
      p1_desc: 'พัฒนาเกมเพื่อการศึกษาภาษาอังกฤษเรื่องคำบุพบทบอกสถานที่ บูรณาการเข้ากับสถานที่และวัฒนธรรมท้องถิ่นจังหวัดยะลาด้วย Unity 2D และภาษา C# ผ่านการประเมินบทความวิจัยแบบ Blind Peer-Reviewed และนำเสนอในงานประชุมวิชาการ NICE 2026',
      p2_title: 'Mobile App สแกน AR Marker เพื่อการศึกษา (โปรเจกต์ & งานฟรีแลนซ์ Fastwork)',
      p2_desc: 'พัฒนาแอปพลิเคชันบนสมาร์ทโฟนด้วย Unity และ Vuforia Image Target สำหรับสแกนภาพการ์ด AR เพื่อเรนเดอร์โมเดล 3 มิติพร้อมระบบควิซโต้ตอบ ส่งมอบงานจริงให้ลูกค้าบน Fastwork ด้วยความพึงพอใจ 100%',
      p3_title: 'Class Fund Management – เว็บแอปจัดการเงินกองทุนห้อง (ใช้งานจริง)',
      p3_desc: 'พัฒนาเว็บแอปพลิเคชันที่ปัจจุบันใช้งานจริงในห้องของนักศึกษาสาขาเทคโนฯ รหัส 42 สำหรับทำธุรกรรมบันทึกรายการโอน รายรับ และรายจ่ายเงินของชั้นปี ออกแบบฐานข้อมูลหลังบ้านด้วย Supabase ให้ตรวจสอบยอดแบบเรียลไทม์ได้อย่างโปร่งใส',
      p4_title: 'ระบบบันทึกและเรียกดูสารสนเทศผู้เรียน โรงเรียนรามันห์ศิริวิทย์',
      p4_desc: 'หัวหน้าทีมพัฒนาเว็บแอปพลิเคชันด้วย Google Apps Script 4 ระบบย่อย (ข้อมูลผู้เรียน, ผลการเรียน, หักคะแนนพฤติกรรม, การบ้าน) พร้อมระบบล็อกอินแยกสิทธิ์ครู/นักเรียน และแสดงผลกราฟสถิติด้วย Looker Studio ในเวลาไม่เกิน 2 วินาที ได้รับรางวัลเหรียญทองระดับชาติ (งานศิลปหัตถกรรม ครั้งที่ 70) และนำไปใช้จริงบนเว็บไซต์โรงเรียน',
      
      // Activities Section
      act_tag: 'COMPETITIONS, HACKATHONS & CAMPUS LEADERSHIP',
      act_heading: 'รางวัลการแข่งขัน นวัตกรรม และกิจกรรมผู้นำ',
      act_sub: 'รวบรวมผลงานการแข่งขันระดับมหาวิทยาลัย ระดับชาติ และบทบาทการทำกิจกรรมร่วมกับผู้อื่นตั้งแต่ระดับมัธยมปลายถึงปัจจุบัน',
      act_col1_title: 'การแข่งขันและเวทีวิชาการระดับมหาวิทยาลัย',
      ac_1_t: 'นำเสนอวิจัยระดับชาติ NICE 2026 & โครงการ STEM ConnectHER Malaysia',
      ac_1_d: 'นำเสนอบทความวิจัยนวัตกรรมเกม 2 มิติ (Oral Presentation) และได้รับคัดเลือกไปแลกเปลี่ยนเรียนรู้เทคโนโลยีที่ Boeing Malaysia และมหาวิทยาลัย UniSZA ประเทศมาเลเซีย',
      ac_2_t: 'ชนะเลิศ การประกวดความเป็นเลิศด้านสื่อและนวัตกรรมการเรียนรู้ภาษาอังกฤษ',
      ac_2_d: 'คว้ารางวัลชนะเลิศอันดับ 1 ในการพัฒนาสื่อและนวัตกรรมการเรียนรู้ภาษาอังกฤษ จัดโดยคณะศึกษาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
      ac_3_t: 'เข้ารอบชิงชนะเลิศ โครงการประกวดนวัตกรรมการเรียนรู้ "Excellence Inno Teach" ครั้งที่ 2',
      ac_3_d: 'ผ่านการคัดเลือกเข้าสู่รอบชิงชนะเลิศ (Finalist) ในการออกแบบและพัฒนานวัตกรรมสื่อการสอนดิจิทัล',
      ac_4_t: 'เข้ารอบชิงชนะเลิศ Southern Young Media for MIDL Hackathon',
      ac_4_d: 'ระดมสมองออกแบบและสร้างสรรค์สื่อดิจิทัลสร้างสรรค์ในรูปแบบ Hackathon จนผ่านเข้าสู่รอบชิงชนะเลิศระดับภาคใต้',
      act_col2_title: 'ภาวะผู้นำ & รางวัลพื้นฐานสาย Tech ช่วงมัธยมปลาย',
      ac_5_t: 'ประธานโครงการรับน้อง สาขาเทคโนโลยีดิจิทัลและสื่อสารการศึกษา',
      ac_5_d: 'บริหารจัดการทีมงาน วางแผนตารางกิจกรรม ประสานงาน และแก้ไขปัญหาเฉพาะหน้าเพื่อให้โครงการสำเร็จลุล่วงอย่างราบรื่น',
      ac_6_t: 'คณะกรรมการสโมสรนักศึกษา คณะศึกษาศาสตร์ (ฝ่ายโสตทัศนูปกรณ์)',
      ac_6_d: 'รับผิดชอบการออกแบบสื่อประชาสัมพันธ์ การจัดการระบบโสตฯ ถ่ายภาพ และตัดต่อวิดีโอกิจกรรมของคณะ',
      ac_7_t: 'เหรียญทองระดับชาติ โครงงานซอฟต์แวร์ & รองชนะเลิศอันดับ 1 ตอบปัญหา IT ระดับภาค',
      ac_7_d: 'คว้าเหรียญทองรองชนะเลิศอันดับ 1 ระดับชาติ งานศิลปหัตถกรรมครั้งที่ 70 (ประเภทซอฟต์แวร์) และรองชนะเลิศอันดับ 1 ตอบปัญหา IT งาน ม.อ.วิชาการ 2565',
      ac_8_t: 'ค่าย CODE KATHON by depa (24 ทีมภูมิภาค) & หุ่นยนต์ Delivery Robot (Arduino)',
      ac_8_d: 'ผ่านการอบรมเขียนโค้ด Python/PHP ควบคุม Raspberry Pi และ IoT กับสำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa) รวมถึงสร้างหุ่นยนต์ส่งของอัตโนมัติด้วย Arduino และชนะเลิศระดับจังหวัดการประกวดคลิปวิดีโอสั้น',
      
      // Experience Section
      exp_tag: 'REAL-WORLD WORK EXPERIENCE',
      exp_heading: 'ประสบการณ์การทำงานจริง',
      exp_sub: 'ฝึกฝนทักษะการทำงานจริงทั้งในสายพัฒนาซอฟต์แวร์/สื่อดิจิทัล การฝึกงานในองค์กรสื่อ และการบริหารจัดการงานบริการ',
      w1_role: 'Freelance Developer & Digital Creator',
      w1_b1: 'ส่งมอบงานพัฒนาเกม (Unity/AR Marker) เว็บไซต์ โมเดล 3 มิติ วาดภาพ/กราฟิก ตัดต่อวิดีโอ และแปลภาษามังงะ สำเร็จกว่า 23 โปรเจกต์ (สำเร็จ 100%)',
      w1_b2: 'ทำงานไว มีคุณภาพ และสื่อสารชัดเจน จนมีลูกค้าประจำกลับมาจ้างซ้ำถึง 14 ราย',
      w2_role: 'Content Creator & Media Intern',
      w2_b1: 'คิดสร้างสรรค์และผลิตคอนเทนต์ใหม่ๆ สำหรับบัญชี TikTok ทางการของ NBT Yala',
      w2_b2: 'ตัดต่อวิดีโอสั้น ใส่โมชันกราฟิก และออกแบบโปสเตอร์ประชาสัมพันธ์ข่าวสารให้น่าสนใจและเข้าใจง่าย',
      w3_role: 'Assistant Store Manager (ผู้ช่วยผู้จัดการ)',
      w3_b1: 'ปฏิบัติงานในตำแหน่งผู้ช่วยผู้จัดการร้าน ดูแลความเรียบร้อยของระบบหน้าร้านและหลังร้าน บริหารจัดการสต็อกและยอดขาย',
      w3_b2: 'ฝึกฝนความอดทน การทำงานภายใต้ความกดดัน การประสานงานร่วมกับเพื่อนร่วมทีม และการแก้ปัญหาเฉพาะหน้าได้อย่างรวดเร็ว',
      
      // Footer Section
      ft_desc: 'ขอบคุณที่เข้ามาชม E-Portfolio ของโนรนะคะ หากพี่ๆ กำลังมองหานักศึกษาฝึกงานตำแหน่ง Mobile Developer Intern หรือ Web Developer Intern ที่พร้อมลุยงาน เรียนรู้ไว และทำงานร่วมกับทีมได้อย่างดีเยี่ยม สามารถติดต่อโนรได้ทุกช่องทางเลยค่ะ',

      gallery_tag: 'INTERACTIVE VISUAL PROOF GALLERY',
      gallery_title: 'แกลลอรีตัวอย่างผลงานแยกตามทักษะ',
      gallery_desc: 'คลิกที่รูปภาพหรือวิดีโอเพื่อขยายขนาดเต็มจอ',
      filter_all: 'ทั้งหมด',
      filter_draw: 'วาดรูป & LINE Sticker',
      filter_uiux: 'ออกแบบ UI/UX & กราฟิก',
      filter_3d: '3D, AR Effect & Video',
      filter_lang: 'แปลภาษามังงะ & ภาษา',
      filter_tech: 'เกม / เว็บ / Mobile AR',
      g_comic: 'วาดคอมมิค',
      g_sticker: 'LINE Stickers',
      g_anime: 'ภาพวาดประกอบเกม (Anime)',
      g_interior: 'วาดองค์ประกอบห้อง',
      g_ui_blobyt: 'BlobyT App UI/UX',
      g_poster: 'ออกแบบโปสเตอร์งาน',
      g_3d: 'ปั้น 3D โมเดล (4 ชิ้น)',
      g_filter: '3 TikTok Filters (Open House)',
      g_manga: 'แปลมังงะ & คลีนภาพ',
      g_lang_award: 'รางวัลเหรียญทองเล่านิทาน & Crossword / ศึกษาดูงาน UiTM',
      g_tech_games: 'เว็บเกมการศึกษา (NICE, Excellence InnoTeach, MIDL)',
      g_tech_web: 'ระบบเว็บร.ร. (ใช้จริง) & เว็บกองทุนห้องรหัส 42',
      g_tech_ar: 'Mobile AR Marker & Scratch (Fastwork)',
      
      cat_drawing: 'ผลงานวาดรูป & LINE Sticker',
      cat_uiux: 'ออกแบบ UI/UX & กราฟิก',
      cat_3d: '3D Model, AR Effect & Video',
      cat_lang: 'แปลภาษามังงะ & ทักษะภาษา',
      cat_tech: 'เกม / เว็บ / Mobile AR',
      g_story: 'เหรียญทองเล่านิทาน',
      g_crossword: 'เหรียญทอง Crossword',
      g_uitm: 'ศึกษาดูงาน UiTM มาเลเซีย',
      g_t1: 'เกม Ruen Rom (ชนะเลิศ 2568)',
      g_t2: 'เกม LORE (InnoTeach)',
      g_t3: 'เกม Southern Sense (MIDL)',
      g_t4: 'เกมวิจัย ENPLACE (NICE)',
      g_t5: 'เว็บจัดการกองทุน (รหัส 42)',
      g_t6: 'ระบบเว็บร.ร.รามันห์ (ใช้งานจริง)',
      g_t7: 'Mobile AR Marker (Fastwork)',
      g_t8: 'เกม Scratch (เรียน & Fastwork)'
    },
    en: {
      // Navbar
      nav_home: 'Home',
      nav_about: 'About',
      nav_skills: 'Skills & Visual Proof',
      nav_projects: 'Core Projects',
      nav_activities: 'Awards & Activities',
      nav_exp: 'Work Experience',
      nav_resume: 'High School',
      
      // Hero Section
      hero_status: 'Available for Summer Internship (Mar – May)',
      hero_pill_1: 'OOP Logic • C# • JS',
      hero_pill_2: 'Figma UI/UX • 3D',
      hero_name: 'Norhaslina Daoh (Nor)',
      hero_role: '3rd-Year Educational Digital Technology Student | PSU Pattani',
      hero_bio: 'Passionate about building interactive mobile apps, 2D/AR games, and full-stack web systems, supported by basic skills in OOP, UI/UX design, 3D modeling, and multiple languages. I am always eager to learn new tools and grow alongside a team.',
      hero_btn_proj: 'Explore Tech Projects',
      hero_btn_gallery: 'Open Full Visual Gallery',
      
      // Tilt Cards
      hl_1: 'NICE 2026 2D Game Research',
      hl_2: 'Deployed Web on a School Website (200+ Users)',
      hl_3: '25+ Fastwork Orders',
      hl_4: 'Hackathon Innovation',
      
      // About Section
      about_title: 'Personal Profile',
      about_p1: 'Hello! I am a third-year student passionate about software development, game creation, and UI/UX design, with a solid foundation in OOP and practical experience building web apps and games. I am a responsible, quick-learning team player seeking a Mobile or Web Developer internship to contribute and gain real-world experience.',
      lbl_fullname: 'Full Name:',
      val_fullname: 'Norhaslina Daoh',
      lbl_phone: 'Phone Number:',
      lbl_loc: 'Current Location:',
      val_loc: 'Yala, Thailand',
      fw_mini_title: 'Fastwork Verified Freelancer',
      fw_mini_desc: '25+ Completed Orders (100%) • 15 Repeat Clients',
      
      // Education Section
      edu_title: 'Education',
      edu_1_period: '2024 – Present (Expected 2027)',
      edu_1_school: 'Prince of Songkla University (Pattani Campus)',
      edu_1_major: 'B.Ed. in Educational Digital Technology and Communication',
      edu_1_detail: 'Studying software and web application development, OOP, database systems, AR/Game educational innovations, and UI/UX design.',
      edu_2_period: 'High School (Grade 10 – 12)',
      edu_2_school: 'Raman Siriwit School, Yala',
      edu_2_major: 'Science – Mathematics Program',
      edu_2_detail: 'Led a team to develop a student information software system (National Gold Medal), awarded Outstanding Student, and represented the school in IT competitions.',
      edu_3_period: 'Middle School (Grade 7 – 9)',
      edu_3_school: 'Raman Siriwit School, Yala',
      edu_3_detail: 'Started practicing computer skills, basic web development, and won a Gold Medal in an English Crossword competition.',
      
      // Skills Section
      skill_tag: 'HARD SKILLS & VISUAL PROOF',
      skill_heading: 'Capabilities & Visual Proof',
      skill_sub: 'Categorized by actual proficiency. Click the cards below to instantly view the gallery of my artworks and projects.',
      btn_open_all_gallery: 'View All Galleries',
      box_lang: 'Programming Languages',
      box_tools: 'Tools & Software',
      hs_1_title: 'Tech & Software',
      hs_2_title: 'Graphics & UI/UX',
      hs_3_title: 'Localization',
      
      // Soft Skills
      soft_heading: 'Teamwork & Soft Skills',
      soft_desc: 'Work ethics cultivated from being a project leader, freshman orientation president, freelancer, and part-time staff.',
      sf_1: 'Teamwork & Collaboration',
      sf_2: 'Leadership',
      sf_3: 'Clear Communication',
      sf_4: 'Problem Solving',
      sf_5: 'Eager to Learn & Try New Tools',
      sf_6: 'Adaptability',
      sf_7: 'Time Management & Punctuality',
      
      // Projects Section
      proj_tag: 'CORE SOFTWARE PROJECTS & RESEARCH',
      proj_heading: 'Software Projects & Academic Research',
      flt_all: 'All Work (4)',
      role_lbl: 'My Role:',
      p1_title: 'Educational 2D Online Game (ENPLACE) – NICE 2026 National Research',
      p1_desc: 'Developed an educational 2D game using Unity and C# to teach English locative prepositions integrated with Yala\'s local cultural contexts. Passed the Blind Peer-Reviewed process and presented at the NICE 2026 National Conference.',
      p2_title: 'Interactive AR Educational Mobile App (Project & Fastwork Freelance)',
      p2_desc: 'Developed a smartphone app using Unity and Vuforia Image Target to scan AR cards and render 3D models with interactive quizzes. Successfully delivered to clients on Fastwork with 100% satisfaction.',
      p3_title: 'Class Fund Management – Deployed Web App (Cohort 42)',
      p3_desc: 'Developed a web application currently actively used by Cohort 42 students for tracking class fund transactions, incomes, and expenses. Designed the backend database with Supabase to provide transparent, real-time balance tracking.',
      p4_title: 'Production-Level Student Information System (Raman Siriwit School)',
      p4_desc: 'Led a team to develop a web app using Google Apps Script comprising 4 sub-systems (Student Data, Grades, Behavior Points, Homework) with role-based login. Displayed statistical graphs via Looker Studio (under 2s query time). Won a National Gold Medal and officially deployed on the school\'s website.',
      
      // Activities Section
      act_tag: 'COMPETITIONS, HACKATHONS & CAMPUS LEADERSHIP',
      act_heading: 'Competitions, Hackathons & Leadership',
      act_sub: 'A compilation of university and national level competitions, as well as leadership roles from high school to present.',
      act_col1_title: 'University-Level Competitions & Academics',
      ac_1_t: 'NICE 2026 National Research Presentation & STEM ConnectHER Malaysia',
      ac_1_d: 'Delivered an oral presentation for 2D game innovation research and was selected to exchange technology knowledge at Boeing Malaysia and UniSZA University, Malaysia.',
      ac_2_t: 'Winner: Excellence in English Learning Media & Innovation Contest',
      ac_2_d: 'Won 1st prize for developing English learning media and innovation, organized by the Faculty of Education, Prince of Songkla University.',
      ac_3_t: 'Finalist: "Excellence Inno Teach" Learning Innovation Contest (2nd Ed.)',
      ac_3_d: 'Selected as a Finalist for designing and developing digital instructional media innovations.',
      ac_4_t: 'Finalist: Southern Young Media for MIDL Hackathon',
      ac_4_d: 'Brainstormed, designed, and created creative digital media in a Hackathon format, advancing to the Southern regional finals.',
      act_col2_title: 'Leadership & High School Tech Fundamentals',
      ac_5_t: 'President of Freshman Orientation Project (Digital Tech Dept.)',
      ac_5_d: 'Managed the team, planned activity schedules, coordinated, and solved on-site problems to ensure the project was completed smoothly.',
      ac_6_t: 'Student Union Committee, Faculty of Education (Audio/Visual Dept.)',
      ac_6_d: 'Responsible for designing PR media, managing AV systems, photography, and video editing for faculty events.',
      ac_7_t: 'National Gold Medal in Software Project & 1st Runner-up in Regional IT Quiz',
      ac_7_d: 'Won a National Gold Medal (1st Runner-up) in the 70th Arts & Crafts Fair (Software Category) and 1st Runner-up in the IT Quiz at PSU Academic Fair 2022.',
      ac_8_t: 'CODE KATHON Camp by depa & Arduino Delivery Robot',
      ac_8_d: 'Completed Python/PHP coding training to control Raspberry Pi and IoT with depa. Built an automated delivery robot using Arduino, and won a provincial short video contest.',
      
      // Experience Section
      exp_tag: 'REAL-WORLD WORK EXPERIENCE',
      exp_heading: 'Work Experience',
      exp_sub: 'Practicing real-world skills in software/digital media development, media organization internships, and service management.',
      w1_role: 'Freelance Developer & Digital Creator',
      w1_b1: 'Delivered game development (Unity/AR Marker), websites, 3D models, graphics, video editing, and manga translation with over 23 projects (100% completion rate).',
      w1_b2: 'Worked fast, delivered high quality, and communicated clearly, resulting in 14 repeat clients.',
      w2_role: 'Content Creator & Media Intern',
      w2_b1: 'Brainstormed and produced new content for NBT Yala\'s official TikTok account.',
      w2_b2: 'Edited short videos, added motion graphics, and designed PR posters to be engaging and easy to understand.',
      w3_role: 'Assistant Store Manager',
      w3_b1: 'Operated as an Assistant Store Manager, overseeing front and back-end store systems, inventory, and sales management.',
      w3_b2: 'Practiced patience, working under pressure, coordinating with teammates, and solving immediate problems efficiently.',
      
      // Footer Section
      ft_desc: 'Thank you for visiting my E-Portfolio! If your team is looking for a Mobile Developer Intern or Web Developer Intern who is ready to work hard, learns fast, and collaborates excellently, please feel free to contact me through any channel.',
      
      // Gallery Page
      gallery_tag: 'INTERACTIVE VISUAL PROOF GALLERY',
      gallery_title: 'Visual Proof Gallery (Click to filter by category)',
      filter_all: 'All Artworks',
      filter_draw: 'Drawing & LINE Sticker',
      filter_uiux: 'UI/UX & Graphics',
      filter_3d: '3D Model & Video',
      filter_lang: 'Manga Translation & Lang',
      filter_tech: 'Game / Web / Mobile AR',
      g1_title: 'LINE Sticker Design & Publishing',
      g1_desc: 'Designed a mochi-style mascot character and drew stickers to sell on the LINE Creators Market to generate income during my studies.',
      g2_title: 'Character & Background Illustration for Games',
      g2_desc: 'Illustrated local cultural backgrounds for the ENPLACE game, designed the Betong Little Wonders mascot, and drew video illustrations that won a provincial contest.',
      g3_title: 'Mobile App & Web UI/UX Design',
      g3_desc: 'Designed the UI for a gamified task app (BlobyT), a boba tea shop management system (Mochi Tea), and a mobile AR quiz app, focusing on clean and intuitive layouts.',
      g4_title: '3D Modeling for AR Apps & Clients',
      g4_desc: 'Modeled and lighted 3D assets to be rendered in AR Marker scanning apps, and delivered custom 3D models to clients on Fastwork.',
      g5_title: 'Short-Form TikTok Video & Motion Editing',
      g5_desc: 'Accepted freelance video editing jobs on Fastwork, produced clips for NBT Yala\'s TikTok, and won a provincial short video contest.',
      g6_title: 'Digital Manga Localization & Language Awards',
      g6_desc: 'Provided translation, raw image cleaning, and meticulous comic/manhwa typesetting services. Also won a Gold Medal in English Storytelling and a Silver Medal in Malay.',
      g7_title: 'Deployed Systems & Software Research',
      g7_desc: 'Features the ENPLACE research game (NICE 2026), AR Marker scanning apps, Cohort 42\'s Web Fund app (React/Supabase), and Raman Siriwit\'s Student Information System.',

      gallery_tag: 'INTERACTIVE VISUAL PROOF GALLERY',
      gallery_title: 'Categorized Visual Proof Gallery',
      gallery_desc: 'Click on any image or video to expand it full screen.',
      filter_all: 'All Artworks',
      filter_draw: 'Drawing & LINE Sticker',
      filter_uiux: 'UI/UX & Graphic Design',
      filter_3d: '3D, AR Effect & Video',
      filter_lang: 'Manga Translation & Languages',
      filter_tech: 'Game / Web / Mobile AR',
      g_comic: 'Comic Drawing',
      g_sticker: 'LINE Stickers',
      g_anime: 'Anime Game Illustration',
      g_interior: 'Interior Assets',
      g_ui_blobyt: 'BlobyT App UI/UX',
      g_poster: 'Poster Design',
      g_3d: '3D Modeling (4 Assets)',
      g_filter: '3 TikTok Filters (Open House)',
      g_manga: 'Manga Translation & Cleaning',
      g_lang_award: 'Gold Medal in Storytelling & Crossword / UiTM Visit',
      g_tech_games: 'Educational Web Games (NICE, LORE, MIDL)',
      g_tech_web: 'Deployed School System & Cohort 42 Web Fund',
      g_tech_ar: 'Mobile AR Marker & Scratch (Fastwork)',

      cat_drawing: 'Drawing & LINE Sticker',
      cat_uiux: 'UI/UX & Graphic Design',
      cat_3d: '3D Model, AR Effect & Video',
      cat_lang: 'Manga Translation & Languages',
      cat_tech: 'Game / Web / Mobile AR',
      g_story: 'Storytelling Gold Medal',
      g_crossword: 'Crossword Gold Medal',
      g_uitm: 'UiTM Malaysia Visit',
      g_t1: 'Ruen Rom Game (Winner 2025)',
      g_t2: 'LORE Game (InnoTeach)',
      g_t3: 'Southern Sense (MIDL)',
      g_t4: 'ENPLACE Research (NICE)',
      g_t5: 'Cohort 42 Web Fund',
      g_t6: 'School Web System (Deployed)',
      g_t7: 'Mobile AR Marker (Fastwork)',
      g_t8: 'Scratch Game (Class & Fastwork)'
    }
  };

  // ดึงค่าภาษาจาก LocalStorage ถ้าไม่มีให้ใช้ 'en'
  let currentLang = localStorage.getItem('portfolioLang') || 'en';
  const langBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');

  function applyLanguage(lang) {
    if (langLabel) {
      langLabel.textContent = lang === 'th' ? 'EN' : 'TH';
    }
    document.documentElement.lang = lang;
    
    // แปลงข้อความทั้งหมดที่มี attribute data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang] && dict[lang][key]) {
        el.textContent = dict[lang][key];
      }
    });
    
    localStorage.setItem('portfolioLang', lang);
  }

  // เรียกใช้ฟังก์ชันแปลภาษาทันทีที่โหลดหน้า
  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'th' ? 'en' : 'th';
      applyLanguage(currentLang);
    });
  }

  // ==========================================
  // 2. ระบบ Smart Back Navigation (จดจำ Section ล่าสุด)
  // ==========================================
  const logoLink = document.getElementById('logoLink');

  document.querySelectorAll('a.go-to-gallery').forEach(btn => {
    btn.addEventListener('click', function() {
      const parentSection = this.closest('section, header');
      if (parentSection) {
        sessionStorage.setItem('lastSection', '#' + parentSection.id);
      }
    });
  });

  if (window.location.pathname.includes('gallery.html') && logoLink) {
    const lastSection = sessionStorage.getItem('lastSection') || '';
    logoLink.href = 'index.html' + lastSection;
  }

  // ==========================================
  // 3. ระบบ Gallery Filter (ในหน้า gallery.html)
  // ==========================================
  const filterBtns = document.querySelectorAll('.gallery-tab-btn, .modal-tab-btn');
  const galleryItems = document.querySelectorAll('.m-gallery-item');

  if (filterBtns.length > 0) {
    const urlParams = new URLSearchParams(window.location.search);
    const targetFilter = urlParams.get('filter') || 'all';

    function filterGallery(category) {
      filterBtns.forEach(b => b.classList.remove('active'));
      const activeBtns = document.querySelectorAll(`.gallery-tab-btn[data-mfilter="${category}"], .modal-tab-btn[data-mfilter="${category}"]`);
      activeBtns.forEach(btn => btn.classList.add('active'));

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-mcat');
        if (category === 'all' || itemCat === category) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    }

    filterGallery(targetFilter);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterGallery(btn.getAttribute('data-mfilter'));
      });
    });
  }

  // ==========================================
  // 4. Parallax Background & Mouse Move
  // ==========================================
  const scrollItems = document.querySelectorAll('.parallax-scroll');
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    scrollItems.forEach(item => {
      const speed = parseFloat(item.getAttribute('data-speed')) || 0.1;
      item.style.transform = `translate3d(0, ${sy * speed}px, 0)`;
    });
  }, { passive: true });

  const heroStage = document.getElementById('heroParallaxStage');
  const mouseItems = document.querySelectorAll('.parallax-mouse');

  if (window.innerWidth >= 992 && heroStage) {
    window.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      mouseItems.forEach(el => {
        const depth = parseFloat(el.getAttribute('data-depth')) || 0.04;
        el.style.transform = `translate3d(${dx * depth}px, ${dy * depth}px, 0)`;
      });
    });
  }

  // ==========================================
  // 5. ปุ่มคลิกคัดลอกอีเมลอัตโนมัติ
  // ==========================================
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyLabel = document.getElementById('copyEmailLabel');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.getAttribute('data-email');
      navigator.clipboard.writeText(email).then(() => {
        copyLabel.textContent = currentLang === 'th' ? 'คัดลอกอีเมลเรียบร้อย! ✓' : 'Email Copied! ✓';
        setTimeout(() => {
          copyLabel.textContent = `${email} (คลิกคัดลอก)`;
        }, 2200);
      });
    });
  }
});

// ==========================================
  // 6. ระบบควบคุมวิดีโอ (เล่นเฉพาะเมื่อ Hover หรือ Click)
  // ==========================================
  const hoverVideos = document.querySelectorAll('video.hover-to-play');

  hoverVideos.forEach(video => {
    
    // สำหรับ Desktop: เล่นเมื่อเอาเมาส์ชี้ และหยุดเมื่อเอาเมาส์ออก
    video.addEventListener('mouseenter', () => {
      // หยุดวิดีโออื่นๆ ทั้งหมดก่อนเล่นตัวใหม่
      hoverVideos.forEach(v => {
        if (v !== video) {
          v.pause();
        }
      });
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // รีเซ็ตวิดีโอกลับไปที่จุดเริ่มต้น (โชว์รูปโปสเตอร์)
    });

    // สำหรับ Mobile/Tablet: เล่นหรือหยุดเมื่อกดแตะที่วิดีโอ
    video.addEventListener('click', (e) => {
      e.preventDefault(); // ป้องกันการกระโดดของหน้าเว็บ
      if (video.paused) {
        // หยุดวิดีโออื่นๆ ก่อน
        hoverVideos.forEach(v => {
          if (v !== video) {
            v.pause();
            v.currentTime = 0;
          }
        });
        video.play();
      } else {
        video.pause();
      }
    });

  });