export const messages = {
  en: {
    nav: {
      profile: 'Profile',
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      awards: 'Awards',
      courses: 'Courses',
      activities: 'Activities',
      contact: 'Contact',
    },
    actions: {
      switchLanguage: 'Switch language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      closeCard: 'Close card',
    },
    labels: {
      focus: 'Focus:',
      methods: 'Methods:',
      copied: 'Copied',
    },
    hero: {
      eyebrow: 'Business Analytics, Software Engineering, AI Systems, Information Technology',
      name: 'Jui-Ping Shen',
      alias: 'Chris Shen',
      basicInfo: [
        { label: 'Name', value: 'Jui-Ping Shen 沈芮平' },
        { label: 'Gender', value: 'Male' },
        { label: 'Phone', value: '(+886) 909-630-038' },
        { label: 'Email', value: 'chrisshen1106@gmail.com', kind: 'email' },
        { label: 'Languages', value: 'Chinese, English' },
        { label: 'Programming', value: 'C, C++, Python' },
      ],
      portraitCaption: 'Jui-Ping Shen / Chris Shen',
    },
    education: {
      eyebrow: 'Academic Foundation',
      title: 'Education',
      items: [
        {
          institution: 'National Taiwan University',
          abbreviation: 'NTU',
          details: [
            { label: 'Major', value: 'Information Management' },
            { label: 'Class Ranking', value: '9 / 59' },
            { label: 'GPA', value: '4.10' },
          ],
        },
        {
          institution: 'National Cheng Kung University',
          abbreviation: 'NCKU',
          details: [
            { label: 'Major', value: 'Economics' },
            { label: 'Minor', value: 'Industrial & Information Management' },
            { label: 'Class Ranking', value: '17 / 72' },
            { label: 'GPA', value: '3.98' },
          ],
        },
      ],
    },
    skills: {
      title: 'Core Capabilities',
      groups: [
        {
          name: 'Analytics',
          items: ['Statistical testing', 'Econometrics', 'Data visualization', 'Business feasibility analysis'],
          description:
            'Uses econometric modeling, statistical testing, and visualization to structure business and social questions. I focus on defining the question clearly, choosing usable variables, interpreting results carefully, and explaining the limits of the analysis.',
        },
        {
          name: 'AI & Systems',
          items: ['Machine learning', 'Deep learning', 'Recommendation systems', 'Information retrieval'],
          description:
            'Builds applied AI workflows around recommendation systems, information retrieval, deep learning, and model evaluation. I care about how the model will be used, how outputs should be checked, and how the system behaves after deployment.',
        },
        {
          name: 'Implementation',
          items: ['Python', 'C / C++', 'Node.js', 'Unity / C#', 'Linux workflow'],
          description:
            'Implements prototypes and experiments with Python, C/C++, Node.js, Unity/C#, and Linux-based workflows. My work includes data pipelines, simulation logic, web application prototypes, and reproducible experiment scripts.',
        },
        {
          name: 'Software Engineering',
          items: ['Frontend', 'Backend', 'Git workflow', 'Deployment'],
          description:
            'Develops web tools with attention to structure, maintainability, and deployment. I am building stronger habits around component design, API integration, version control, documentation, and turning coursework prototypes into usable products.',
        },
      ],
    },
    experience: {
      eyebrow: 'Practical Experience',
      title: 'Experience',
      items: [
        {
          date: '2025.09 - 2026.02',
          title: 'Industry-Academia Collaboration Assistant | NTU Information Management × 1111 Job Bank',
          titleRole: 'Industry-Academia Collaboration Assistant',
          titleAffiliation: 'NTU Information Management × 1111 Job Bank',
          description:
            'Continued the industry-academia collaboration by running experiments between the existing system and our team’s research and development results. I also explained the system design logic to internal company members, evaluated tradeoffs between expressiveness and performance from a business perspective, and successfully helped the company adopt our talent-resume recommendation system.',
          detail:
            'Continued the industry-academia collaboration by running experiments between the existing system and our team’s research and development results. I also explained the system design logic to internal company members, evaluated tradeoffs between expressiveness and performance from a business perspective, and successfully helped the company adopt our talent-resume recommendation system.',
          tags: ['System Adoption', 'Artificial Intelligence', 'Recommendation Systems', 'Model Deployment'],
        },
        {
          date: '2025.06 - 2026.01',
          title: 'Introduction to Computer Science Assistant Instructor | GET.com',
          titleRole: 'Introduction to Computer Science Assistant Instructor',
          titleAffiliation: 'GET.com',
          description:
            'Helped students review exams and grade answer sheets. After each class, I also supported key concept review and summarized difficult chapters such as operating systems, data structures, and programming languages, helping many undergraduate candidates prepare for graduate school entrance exams.',
          detail:
            'Helped students review exams and grade answer sheets. After each class, I also supported key concept review and summarized difficult chapters such as operating systems, data structures, and programming languages, helping many undergraduate candidates prepare for graduate school entrance exams.',
          tags: ['Review Sessions', 'Computer Science Fundamentals', 'Programming Languages', 'Data Structures', 'Teaching'],
        },
        {
          date: '2025.05 - 2025.08',
          title: 'Industry-Academia R&D Member | NTU Information Management × 1111 Job Bank',
          titleRole: 'Industry-Academia R&D Member',
          titleAffiliation: 'NTU Information Management × 1111 Job Bank',
          description:
            'Designed a recommendation system for a well-known Taiwanese job platform. Using recent AI techniques such as word embeddings, dual-tower recommendation models, and similarity-based recommendation models, our team improved and developed the company’s existing recommendation system, compared algorithms for different job types and talent profiles, and successfully built a precise recommendation system that increased system usage by 50%.',
          detail:
            'Designed a recommendation system for a well-known Taiwanese job platform. Using recent AI techniques such as word embeddings, dual-tower recommendation models, and similarity-based recommendation models, our team improved and developed the company’s existing recommendation system, compared algorithms for different job types and talent profiles, and successfully built a precise recommendation system that increased system usage by 50%.',
          tags: ['Software Engineering', 'AI Model Development', 'Algorithms', 'Model Performance Comparison', 'Large Language Models'],
        },
      ],
    },
    awards: {
      eyebrow: 'Recognition',
      title: 'Awards & Honors',
      items: [
        {
          date: 'Apr 2024',
          title: 'TOEIC Listening and Reading',
          achievement: '870 Golden Certificate',
          organization: 'TOEIC Program',
        },
        {
          date: 'Apr 2024',
          title: 'Top Trader Investment Competition',
          achievement: '11th Place Nationally',
          organization: 'Capital Securities competition, representing NCKU',
        },
        {
          date: 'May 2024',
          title: 'NCKU Trivia Game',
          achievement: '3rd Place',
          organization: 'National Cheng Kung University',
        },
        {
          date: 'May 2023',
          title: 'Commercial Programming Final Exhibition',
          achievement: '1st Place',
          organization: 'Course final exhibition',
        },
        {
          date: 'Mar 2023',
          title: 'Social Data Science Exhibition',
          achievement: '1st Place',
          organization: 'Course final exhibition',
        },
      ],
    },
    projects: {
      eyebrow: 'Selected Work',
      title: 'Projects',
      items: [
        {
          year: '2025',
          title: 'Talent-Job Matching Prediction',
          context: 'Statistical Learning & Deep Learning',
          description:
            'Built a dual-tower deep learning model with embedding features for a Kaggle talent-job matching task, reaching a top 10 course ranking.',
          tags: ['Deep Learning', 'Dual-Tower', 'Embedding', 'Kaggle'],
        },
        {
          year: '2025',
          title: 'AI Voice Cloning Detection Study',
          context: 'Information Management',
          description:
            'Studied whether human listeners can distinguish AI voice cloning through t-tests, U-tests, GEE, significance testing, and correlation analysis.',
          tags: ['Statistical Testing', 'GEE', 'AI Detection', 'Survey Analysis'],
        },
        {
          year: '2025',
          title: 'Video Transcript Analysis',
          context: 'Information Retrieval & Text Mining',
          description:
            'Compared TF-IDF and model-based retrieval approaches for transcript key-point extraction and summarized their tradeoffs.',
          tags: ['TF-IDF', 'NLP', 'Information Retrieval', 'Text Mining'],
        },
        {
          year: '2025',
          title: 'Gravity Drift',
          context: 'Game Design',
          description:
            'Developed a Unity game with C# mechanics, gravity-based interaction, physics behavior, and complete player controls.',
          tags: ['Unity', 'C#', 'Game Mechanics'],
        },
        {
          year: '2025',
          title: 'Baseball Season Prediction Platform',
          context: 'Web Application Development',
          description:
            'Created a full-stack sports analytics platform using Monte Carlo simulation, database integration, and web interfaces for season prediction.',
          tags: ['Node.js', 'Monte Carlo', 'Database', 'Sports Analytics'],
        },
        {
          year: '2024',
          title: 'Sorting Algorithm Analysis',
          context: 'Data Structure',
          description:
            'Implemented C++ sorting experiments in a Linux workflow to compare measured runtime against theoretical complexity.',
          tags: ['C++', 'Algorithms', 'Linux'],
        },
        {
          year: '2024',
          title: 'FrostFit Bites Platform',
          context: 'E-Commerce',
          description:
            'Designed a frozen food platform prototype through agile iteration, structured design, Figma workflows, and logical site modeling.',
          tags: ['Figma', 'Agile', 'Web Design'],
        },
        {
          year: '2023',
          title: 'Traffic Accident Analysis',
          context: 'Econometrics I',
          description:
            'Used multivariate regression and Tainan open data to analyze the relationship between traffic accidents and elderly population factors.',
          tags: ['Regression', 'Open Data', 'Econometrics'],
        },
        {
          year: '2023',
          title: 'Data Analysis & Visualization',
          context: 'Commercial Programming',
          description:
            'Collected open-source datasets, performed Python-based data mining, and built visualizations to explain influential variables and relationships.',
          tags: ['Python', 'Data Mining', 'Data Visualization'],
        },
        {
          year: '2023',
          title: 'Tea-Tec Intelligent System',
          context: 'Information Management',
          description:
            'Proposed an intelligent tea beverage POS and supply chain system integrating IoT concepts and RPA-based matching workflows.',
          tags: ['IoT', 'RPA', 'POS System', 'Supply Chain'],
        },
      ],
    },
    courses: {
      eyebrow: 'Academic Focus',
      title: 'Coursework',
      technologyTitle: 'Information Technology Courses',
      analyticsTitle: 'Business Analytics Courses',
      gradeLabel: 'Grade',
      technology: [
        { name: 'Statistical Learning and Deep Learning', grade: 'A+' },
        { name: 'Game Design', grade: 'A+' },
        { name: 'Web Application Development', grade: 'A+' },
        { name: 'Commercial Programming', grade: 'A+' },
        { name: 'Production & Operations Management', grade: 'A+' },
        { name: 'Discrete Mathematics', grade: 'A' },
        { name: 'Introduction to Machine Learning', grade: 'A' },
        { name: 'Introduction to AI', grade: 'A' },
        { name: 'Industrial Management', grade: 'A' },
        { name: 'Introduction to E-Commerce', grade: 'A' },
        { name: 'Information Retrieval and Text Mining', grade: 'A-' },
        { name: 'Information Management', grade: 'A-' },
        { name: 'Introduction to Computer', grade: 'A-' },
        { name: 'Operations Research', grade: 'A-' },
        { name: 'Data Structure', grade: 'A-' },
      ],
      analytics: [
        { name: 'Mathematical Statistics', grade: 'A+' },
        { name: 'Economics Mathematics', grade: 'A+' },
        { name: 'International Finance', grade: 'A+' },
        { name: 'Sports Industry Economics', grade: 'A+' },
        { name: 'Business Feasibility Analysis', grade: 'A' },
        { name: 'Economics Growth', grade: 'A' },
        { name: 'Health Economics', grade: 'A' },
        { name: 'Behavioral Economics', grade: 'A' },
        { name: 'Neuroeconomics', grade: 'A' },
        { name: 'International Trade', grade: 'A-' },
        { name: 'Currency and Banking', grade: 'A-' },
        { name: 'Economics Principles', grade: 'A-' },
        { name: 'Econometrics', grade: 'A-' },
        { name: 'Urban Economics', grade: 'A-' },
        { name: 'Quality Management', grade: 'A-' },
        { name: 'Marketing Management', grade: 'A-' },
      ],
    },
    activities: {
      eyebrow: 'Leadership',
      title: 'Activities',
      items: [
        {
          year: '2025',
          title: 'NVIDIA Deep Learning Workshop',
          description: 'Completed NVIDIA deep learning workshop training.',
        },
        {
          year: '2024',
          title: 'Head Organizer - NCKU Economics Freshman Camp',
          description: 'Led planning and execution for the NCKU Economics freshman camp.',
        },
        {
          year: '2024',
          title: 'Director - NCKU Bike Festival',
          description: 'Directed the Economics Department presence for the NCKU Bike Festival.',
        },
        {
          year: '2023',
          title: 'Camp Counselor - NCKU Economics Freshman Camp',
          description: 'Supported freshman camp operations and participant engagement.',
        },
        {
          year: '2023',
          title: 'Camp Counselor - NCKU Economics Summer Camp',
          description: 'Worked with the team on camp activities and student support.',
        },
        {
          year: '2023',
          title: 'PR Director - NCKU Economics Student Association',
          description: 'Managed public relations coordination for the department student association.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Evidence',
      title: 'Photo Records',
      items: {
        lab: { title: 'BAEIR Lab Gathering', description: 'Research and team collaboration' },
        workshop: { title: 'SofinX Finance Workshop', description: 'Finance and analytics practice' },
        game: { title: 'Game Design Project', description: 'Unity development and final demo' },
        webapp: { title: 'Web App Simulation Platform', description: 'Full-stack prediction interface' },
        nvidia: { title: 'NVIDIA Certificate', description: 'Deep learning workshop completion' },
        toeic: { title: 'TOEIC Certificate', description: 'English proficiency record' },
        bikeFestival: { title: 'NCKU Bike Festival', description: 'Department public relations role' },
        trivia: { title: 'NCKU Trivia Game', description: 'Third-place award record' },
        environmentAward: { title: 'Environmental Economics Award', description: 'Course award certificate' },
        freshmanCamp: { title: 'Freshman Camp Lead', description: 'NCKU Economics camp leadership' },
        gameDesign: { title: 'Game Design Record', description: 'Game development coursework' },
        campFire: { title: 'Freshman Camp Night Event', description: 'Camp planning and execution' },
        econometricsShow: { title: 'Econometrics Exhibition', description: 'Final presentation record' },
        econometricsCertificate: { title: 'Econometrics Certificate', description: 'Course participation proof' },
        gameFinal: { title: 'Game Design Final Project', description: 'Final project gameplay record' },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s Connect',
      email: 'chrisshen1106@gmail.com',
      phone: '(+886) 909-630-038',
      github: 'github.com/Chrisshen1106',
    },
    footer: {},
  },
  zh: {
    nav: {
      profile: '首頁',
      education: '學歷',
      experience: '工作記錄',
      projects: '專題',
      awards: '獲獎',
      courses: '課程',
      activities: '活動',
      contact: '聯絡',
    },
    actions: {
      switchLanguage: '切換語言',
      openMenu: '開啟選單',
      closeMenu: '關閉選單',
      closeCard: '關閉資訊卡',
    },
    labels: {
      focus: '重點：',
      methods: '方法：',
      copied: '已複製',
    },
    hero: {
      eyebrow: '商業分析、軟體工程、AI系統、資訊技術',
      name: '沈芮平',
      alias: 'Chris Shen',
      basicInfo: [
        { label: '姓名', value: 'Jui-Ping Shen 沈芮平' },
        { label: '性別', value: 'Male' },
        { label: '電話', value: '(+886) 909-630-038' },
        { label: 'Email', value: 'chrisshen1106@gmail.com', kind: 'email' },
        { label: '語言', value: '中文、英文' },
        { label: '程式語言', value: 'C、C++、Python' },
      ],
      portraitCaption: '沈芮平 / Chris Shen',
    },
    education: {
      eyebrow: '學術背景',
      title: '學歷',
      items: [
        {
          institution: '國立臺灣大學',
          abbreviation: 'NTU',
          details: [
            { label: '主修', value: '資訊管理學研究所' },
            { label: '班排', value: '9 / 59' },
            { label: 'GPA', value: '4.10' },
          ],
        },
        {
          institution: '國立成功大學',
          abbreviation: 'NCKU',
          details: [
            { label: '主修', value: '經濟系' },
            { label: '輔系', value: '工業與資訊管理學系' },
            { label: '班排', value: '17 / 72' },
            { label: 'GPA', value: '3.98' },
          ],
        },
      ],
    },
    skills: {
      title: '核心能力',
      groups: [
        {
          name: '分析方法',
          items: ['統計檢定', '計量經濟', '資料視覺化', '商用可行性分析'],
          description:
            '以計量模型、統計檢定與資料視覺化整理商業與社會議題。我的重點放在問題定義、變數選擇、資料清理、結果解釋，以及清楚說明分析限制。',
        },
        {
          name: 'AI 與系統',
          items: ['機器學習', '深度學習', '推薦系統', '資訊檢索'],
          description:
            '能將機器學習、深度學習、資訊檢索與推薦系統方法，轉化成可測試的模型流程與應用原型。我會關注模型輸出如何被檢查、如何接到流程中，以及是否真的改善使用情境。',
        },
        {
          name: '實作工具',
          items: ['Python', 'C / C++', 'Node.js', 'Unity / C#', 'Linux 工作流程'],
          description:
            '以 Python、C/C++、Node.js、Unity/C# 與 Linux 工作流程完成課程專題、資料實驗與網站原型。內容包含資料處理、模擬邏輯、前後端介面、遊戲機制與可重現的實驗腳本。',
        },
        {
          name: '軟體工程',
          items: ['前端', '後端', 'Git 流程', '部署'],
          description:
            '持續累積網站與工具開發能力，重視程式結構、可維護性與部署流程。除了完成原型，也會練習元件拆分、API 串接、版本控制、文件整理，以及把課程作品整理成可使用的產品。',
        },
      ],
    },
    experience: {
      eyebrow: '實務經驗',
      title: '工作紀錄',
      items: [
        {
          date: '2025.09 - 2026.02',
          title: '產學合作助理｜台灣大學資訊管理研究所 Ｘ 1111人力銀行',
          titleRole: '產學合作助理',
          titleAffiliation: '台灣大學資訊管理研究所 Ｘ 1111人力銀行',
          description:
            '產學合作接續工作，將我們團隊研究與開發成果進行新舊系統實驗。同時教導公司內部員工系統設計的邏輯，並以商業角度考量表現性跟效能之間的取捨，最後成功協助公司導入我們設計的人才履歷推薦系統。',
          detail:
            '產學合作接續工作，將我們團隊研究與開發成果進行新舊系統實驗。同時教導公司內部員工系統設計的邏輯，並以商業角度考量表現性跟效能之間的取捨，最後成功協助公司導入我們設計的人才履歷推薦系統。',
          tags: ['系統導入', '人工智慧', '推薦系統', '模型落地'],
        },
        {
          date: '2025.06 - 2026.01',
          title: '計算機概論助理教授｜高點教育集團',
          titleRole: '計算機概論助理教授',
          titleAffiliation: '高點教育集團',
          description:
            '協助同學進行考卷檢討、考卷批改等等的工作。同時於每次課程結束協助同學進行重點複習，在比較困難的章節（例如作業系統、資料結構、程式語言）進行重點整理、協助眾多大學部考生考取研究所。',
          detail:
            '協助同學進行考卷檢討、考卷批改等等的工作。同時於每次課程結束協助同學進行重點複習，在比較困難的章節（例如作業系統、資料結構、程式語言）進行重點整理、協助眾多大學部考生考取研究所。',
          tags: ['重點複習', '計算機概論', '程式語言', '資料結構', '教學'],
        },
        {
          date: '2025.05 - 2025.08',
          title: '產學合作研發成員｜台灣大學資訊管理研究所 Ｘ 1111人力銀行',
          titleRole: '產學合作研發成員',
          titleAffiliation: '台灣大學資訊管理研究所 Ｘ 1111人力銀行',
          description:
            '替台灣知名人力銀行設計推薦系統，透過近年 AI 技術（如：詞嵌入技術、雙塔推薦模型、相似度推薦模型等等），結合公司既有的推薦系統進行改良與研發，找出最適合每種職缺類型或是不同人才之間的推薦演算法，並成功開發出使系統使用度成長 50% 的精準推薦系統。',
          detail:
            '替台灣知名人力銀行設計推薦系統，透過近年 AI 技術（如：詞嵌入技術、雙塔推薦模型、相似度推薦模型等等），結合公司既有的推薦系統進行改良與研發，找出最適合每種職缺類型或是不同人才之間的推薦演算法，並成功開發出使系統使用度成長 50% 的精準推薦系統。',
          tags: ['軟體工程', 'AI 模型開發', '演算法', '模型效能比較', '大型語言模型'],
        },
      ],
    },
    awards: {
      eyebrow: '成果紀錄',
      title: '獲獎與證照',
      items: [
        {
          date: '2024.04',
          title: 'TOEIC Listening and Reading',
          achievement: '870 金色證書',
          organization: 'TOEIC 測驗',
        },
        {
          date: '2024.04',
          title: '群益生力軍投資競賽',
          achievement: '全國第 11 名',
          organization: '代表成功大學出賽',
        },
        {
          date: '2024.05',
          title: '成大金頭腦競賽',
          achievement: '第三名',
          organization: '國立成功大學',
        },
        {
          date: '2023.05',
          title: '商用程式設計期末聯展',
          achievement: '第一名',
          organization: '課程期末聯展',
        },
        {
          date: '2023.03',
          title: '社會資料科學期末聯展',
          achievement: '第一名',
          organization: '課程期末聯展',
        },
      ],
    },
    projects: {
      eyebrow: '作品集',
      title: '專題紀錄',
      items: [
        {
          year: '2025',
          title: '人才與職缺媒合預測',
          context: '統計學習與深度學習',
          description:
            '以雙塔式深度學習架構與 embedding 特徵處理 Kaggle 人才職缺媒合任務，取得課程排名前 10。',
          tags: ['Deep Learning', 'Dual-Tower', 'Embedding', 'Kaggle'],
        },
        {
          year: '2025',
          title: 'AI 語音複製辨識研究',
          context: '資訊管理',
          description:
            '使用 t-test、U-test、GEE、顯著性檢定與相關係數分析，研究人類是否能辨識 AI 語音複製。',
          tags: ['統計檢定', 'GEE', 'AI Detection', '問卷分析'],
        },
        {
          year: '2025',
          title: '影片逐字稿重點分析',
          context: '資訊檢索與文字探勘',
          description:
            '比較 TF-IDF 與模型式資訊檢索方法在逐字稿重點擷取上的效果，整理各方法優勢與限制。',
          tags: ['TF-IDF', 'NLP', '資訊檢索', '文字探勘'],
        },
        {
          year: '2025',
          title: 'Gravity Drift',
          context: '遊戲設計',
          description: '使用 Unity 與 C# 開發遊戲，完成重力互動、物理行為與玩家操作機制。',
          tags: ['Unity', 'C#', 'Game Mechanics'],
        },
        {
          year: '2025',
          title: '棒球賽季預測平台',
          context: 'WebAPP 開發',
          description:
            '建立運動分析網站平台，結合 Monte Carlo 模擬、資料庫整合與前後端介面進行賽季預測。',
          tags: ['Node.js', 'Monte Carlo', 'Database', 'Sports Analytics'],
        },
        {
          year: '2024',
          title: '排序演算法效率分析',
          context: '資料結構',
          description: '以 Linux 工作流程與 C++ 程式實測排序演算法耗時，對照理論時間複雜度。',
          tags: ['C++', 'Algorithms', 'Linux'],
        },
        {
          year: '2024',
          title: 'FrostFit Bites 平台',
          context: '電子商務',
          description: '以敏捷流程、結構化設計與 Figma 原型建立冷凍食品平台的網站架構與介面。',
          tags: ['Figma', 'Agile', 'Web Design'],
        },
        {
          year: '2023',
          title: '台南交通事故分析',
          context: '計量經濟學',
          description: '使用台南市開放資料與多變量迴歸，分析交通事故與高齡人口等變數之關係。',
          tags: ['迴歸分析', 'Open Data', 'Econometrics'],
        },
        {
          year: '2023',
          title: '資料分析與視覺化',
          context: '商用程式設計',
          description:
            '蒐集線上開放資料，以 Python 進行資料探勘與視覺化，透過圖表呈現重要應變數與影響因子之間的關係。',
          tags: ['Python', '資料探勘', '資料視覺化'],
        },
        {
          year: '2023',
          title: 'Tea-Tec 智慧系統',
          context: '資訊管理',
          description:
            '提出智慧飲料 POS 與供應鏈整合系統，結合 IoT 概念與 RPA 自動媒合流程。',
          tags: ['IoT', 'RPA', 'POS System', 'Supply Chain'],
        },
      ],
    },
    courses: {
      eyebrow: '學術重點',
      title: '修課紀錄',
      technologyTitle: '資訊技術相關課程',
      analyticsTitle: '商業分析相關課程',
      gradeLabel: '成績',
      technology: [
        { name: '統計學習與深度學習', grade: 'A+' },
        { name: '遊戲設計', grade: 'A+' },
        { name: 'WebAPP 開發', grade: 'A+' },
        { name: '商用程式設計', grade: 'A+' },
        { name: '生產與作業管理', grade: 'A+' },
        { name: '離散數學', grade: 'A' },
        { name: '機器學習概論', grade: 'A' },
        { name: '人工智慧導論', grade: 'A' },
        { name: '工業管理概論', grade: 'A' },
        { name: '電子商務概論', grade: 'A' },
        { name: '資訊檢索與文字探勘導論', grade: 'A-' },
        { name: '資訊管理', grade: 'A-' },
        { name: '計算機概論', grade: 'A-' },
        { name: '作業研究', grade: 'A-' },
        { name: '資料結構', grade: 'A-' },
      ],
      analytics: [
        { name: '數理統計學', grade: 'A+' },
        { name: '經濟數學', grade: 'A+' },
        { name: '國際金融', grade: 'A+' },
        { name: '運動產業經濟學', grade: 'A+' },
        { name: '商用可行性分析', grade: 'A' },
        { name: '經濟成長', grade: 'A' },
        { name: '健康經濟學', grade: 'A' },
        { name: '行為經濟學', grade: 'A' },
        { name: '神經經濟學', grade: 'A' },
        { name: '國際貿易', grade: 'A-' },
        { name: '貨幣銀行學', grade: 'A-' },
        { name: '經濟學原理', grade: 'A-' },
        { name: '計量經濟學', grade: 'A-' },
        { name: '都市經濟學', grade: 'A-' },
        { name: '品質管理', grade: 'A-' },
        { name: '行銷管理', grade: 'A-' },
      ],
    },
    activities: {
      eyebrow: '領導與活動',
      title: '課外活動',
      items: [
        {
          year: '2025',
          title: 'NVIDIA 深度學習工作坊',
          description: '完成 NVIDIA 深度學習工作坊訓練。',
        },
        {
          year: '2024',
          title: '成大經濟系迎新宿營總召集人',
          description: '負責統籌成大經濟系迎新宿營規劃與執行。',
        },
        {
          year: '2024',
          title: '成大單車節經濟系負責人',
          description: '負責經濟系於成大單車節的活動規劃、協調與現場執行。',
        },
        {
          year: '2023',
          title: '成大經濟系迎新宿營隊輔',
          description: '協助營隊流程、活動帶領與新生互動。',
        },
        {
          year: '2023',
          title: '成大經濟營隊輔',
          description: '支援營隊活動設計、團隊合作與學員照顧。',
        },
        {
          year: '2023',
          title: '成大經濟系學會公關長',
          description: '負責系學會公關溝通、活動協調與外部合作。',
        },
      ],
    },
    gallery: {
      eyebrow: '作品與證明',
      title: '照片紀錄',
      items: {
        lab: { title: 'BAEIR Lab 聚餐', description: '研究團隊與合作紀錄' },
        workshop: { title: 'SofinX 金融工作坊', description: '金融與分析實作' },
        game: { title: '遊戲設計期末專題', description: 'Unity 開發與成果展示' },
        webapp: { title: 'WebAPP 模擬平台', description: '全端預測平台介面' },
        nvidia: { title: 'NVIDIA 證書', description: '深度學習工作坊完成證明' },
        toeic: { title: 'TOEIC 證書', description: '英文能力測驗紀錄' },
        bikeFestival: { title: '成大單車節公關', description: '系上活動與公關紀錄' },
        trivia: { title: '成大金頭腦第三名', description: '競賽獲獎紀錄' },
        environmentAward: { title: '環境經濟學得獎獎狀', description: '課程成果紀錄' },
        freshmanCamp: { title: '經濟系新生宿營總召', description: '營隊領導與籌辦紀錄' },
        gameDesign: { title: '遊戲設計', description: '遊戲開發課程紀錄' },
        campFire: { title: '經濟系新生宿營火晚', description: '營隊活動執行紀錄' },
        econometricsShow: { title: '計量經濟學期末展演', description: '期末展示紀錄' },
        econometricsCertificate: { title: '計量經濟學二參加證明', description: '課程參與證明' },
        gameFinal: { title: '遊戲設計期末專題', description: '期末專題成果紀錄' },
      },
    },
    contact: {
      eyebrow: '聯絡方式',
      title: '歡迎聯絡',
      email: 'chrisshen1106@gmail.com',
      phone: '(+886) 909-630-038',
      github: 'github.com/Chrisshen1106',
    },
    footer: {},
  },
};
