/* BJMP Portal interactions + Hindi / English language switcher */

(() => {
  "use strict";

  const translations = {
  // "सर्वे भवन्तु सुखिनः सर्वे संतु निरामया": "May all be happy, may all be free from illness",
  "हिन्दी": "Hindi",
  // "भारतीय जन मोर्चा पार्टी": "Bharatiya Jan Morcha Party",
  "सदस्य बनें": "Become a Member",
  "सहयोग": "Contribute",
  "मुख्य पृष्ठ": "Home",
  "पार्टी परिचय": "About the Party",
  "नेतृत्व": "Leadership",
  "गैलरी": "Gallery",
  "वीडियो": "Videos",
  "सहयोग करें": "Contribute",
  "राष्ट्रीय घोषणा": "National Announcement",
  "★ सर्वे भवन्तु सुखिनः सर्वे संतु निरामया": "★ May all be happy, may all be free from illness",
  "भारतीय जन मोर्चा पार्टी (BJMP) राष्ट्रव्यापी सदस्यता अभियान 2025 में सहभागिता सुनिश्चित करें": "Bharatiya Jan Morcha Party (BJMP) — Participate in the Nationwide Membership Campaign 2025",
  "निर्वाचन आयोग पंजीकरण क्र.: 56/183/2016-17/रा.द.अनु.-1": "Election Commission Registration No.: 56/183/2016-17/R.D.Anu.-1",
  "संगठन ही शक्ति है: राष्ट्र निर्माण में अपनी सक्रिय आहुति दें": "Organization is Strength: Contribute Actively to Nation Building",
  "ऑनलाइन पंजीकरण": "Online Registration",
  "भारत निर्वाचन आयोग द्वारा पंजीकृत दल": "Party Registered with the Election Commission of India",
  "राष्ट्रहित सर्वोपरि": "Nation First",
  "आपका भारतीय जन मोर्चा पार्टी की आधिकारिक वेबसाइट पर हार्दिक स्वागत है।": "A warm welcome to you on the official website of Bharatiya Jan Morcha Party.",
  "यह मंच संगठन, सदस्यता, नेतृत्व एवं महत्वपूर्ण जानकारियों के लिए समर्पित है।": "This platform is dedicated to the organization, membership, leadership and important information.",
  "सहयोग राशि दें": "Make a Contribution",
  "\"सर्वे भवन्तु सुखिनः सर्वे संतु निरामया\" — सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्।": "\"May all be happy, may all be free from illness\" — May all see what is auspicious; may no one suffer.",
  "विचारधारा एवं सिद्धांत": "Ideology & Principles",
  "IDEOLOGY & PILLARS (विचारधारा एवं सिद्धांत)": "IDEOLOGY & PILLARS (Ideology & Principles)",
  "सशक्त, समृद्ध और आत्मनिर्भर भारत का निर्माण": "Building a Strong, Prosperous and Self-Reliant India",
  "भारतीय जन मोर्चा पार्टी (BJMP) एक पंजीकृत राजनीतिक दल है, जो राष्ट्रहित, सुशासन, सामाजिक न्याय, लोकतांत्रिक मूल्यों एवं जनभागीदारी के माध्यम से एक सशक्त, समृद्ध और आत्मनिर्भर भारत के निर्माण के लिए कार्यरत है।": "Bharatiya Jan Morcha Party (BJMP) is a registered political party working to build a strong, prosperous and self-reliant India through national interest, good governance, social justice, democratic values and public participation.",
  "सामाजिक समरसता": "Social Harmony",
  "समाज के प्रत्येक वर्ग में आपसी सौहार्द, समरसता और अखंड राष्ट्रीय भावना का विकास, बिना किसी भेद-भाव के।": "Develop mutual harmony, social cohesion and an undivided national spirit among every section of society, without discrimination.",
  "सुशासन एवं पारदर्शिता": "Good Governance & Transparency",
  "भ्रष्टाचार मुक्त तंत्र, जवाबदेह सार्वजनिक संस्थान और नागरिक सेवाओं की अंतिम पंक्ति तक शत-प्रतिशत पहुंच।": "A corruption-free system, accountable public institutions and complete delivery of citizen services to the last mile.",
  "जनभागीदारी": "Public Participation",
  "नीति निर्धारण और विकास कार्यों में नागरिकों की प्रत्यक्ष भागीदारी को अनिवार्य और प्रभावशाली बनाना।": "Make direct citizen participation in policymaking and development work meaningful and effective.",
  "समान अवसर": "Equal Opportunity",
  "प्रत्येक नागरिक को उसकी प्रतिभा, निष्ठा और योग्यता के अनुरूप शिक्षा, रोजगार एवं प्रगति के समान अवसर।": "Equal opportunities for education, employment and progress according to every citizen's talent, commitment and merit.",
  "संवैधानिक व्यवस्था के प्रति प्रतिबद्धता": "Commitment to the Constitutional Order",
  "भारतीय संविधान की मर्यादाओं, विधि के शासन तथा राष्ट्रीय संप्रभुता की रक्षा के प्रति अटूट निष्ठा।": "Unwavering commitment to the dignity of the Indian Constitution, the rule of law and the protection of national sovereignty.",
  "लोकतांत्रिक मूल्यों का सम्मान": "Respect for Democratic Values",
  "वैचारिक स्वतंत्रता, गरिमा और संवाद को बढ़ावा देकर लोकतंत्र के मूल स्तंभों को जमीनी स्तर पर सुदृढ़ करना।": "Strengthen the foundations of democracy at the grassroots by promoting freedom of thought, dignity and dialogue.",
  "PARTY OBJECTIVES (उद्देश्य)": "PARTY OBJECTIVES (Objectives)",
  "संगठनात्मक लक्ष्य": "Organizational Goals",
  "पार्टी के प्रमुख उद्देश्य (Party Objectives)": "Key Party Objectives",
  "जमीनी स्तर पर सकारात्मक परिवर्तन और राष्ट्र के सर्वांगीण विकास हेतु हमारी पांच सूत्रीय कार्ययोजना:": "Our five-point action plan for positive grassroots change and the all-round development of the nation:",
  "संकल्प पत्र विस्तार से देखें": "View the Resolutions in Detail",
  "राष्ट्र निर्माण में सक्रिय सहभागिता": "Active Participation in Nation Building",
  "हर युवा और नागरिक को देश की नीति व निर्माण में सक्रिय भागीदार बनाना।": "Make every young person and citizen an active participant in the country's policymaking and development.",
  "लोकतांत्रिक व्यवस्था को सुदृढ़ करना": "Strengthening the Democratic System",
  "चुनावी सुधार, शुचिता और जन-प्रतिनिधियों की जनता के प्रति सीधी जवाबदेही।": "Electoral reforms, integrity and direct accountability of elected representatives to the people.",
  "जनहित एवं सामाजिक कल्याण को बढ़ावा देना": "Promoting Public Welfare & Social Well-Being",
  "गरीब, वंचित व शोषित वर्गों के उत्थान हेतु समर्पित कल्याणकारी नीतियां।": "Welfare policies dedicated to the upliftment of poor, disadvantaged and marginalized sections.",
  "शिक्षा, स्वास्थ्य एवं रोजगार पहल": "Education, Health & Employment Initiatives",
  "निःशुल्क गुणवत्तापूर्ण गुरुकुल-आधारित शिक्षा, सस्ती चिकित्सा और स्थानीय रोजगार।": "Free quality Gurukul-based education, affordable healthcare and local employment.",
  "महिलाओं, युवाओं, किसानों व श्रमिकों का सशक्तिकरण": "Empowerment of Women, Youth, Farmers & Workers",
  "अन्नदाता का सम्मान, युवा आत्मनिर्भरता और नारी शक्ति की पूर्ण सुरक्षा।": "Respect for farmers, youth self-reliance and complete protection of women.",
  "KEY RESOLUTIONS (हमारे संकल्प) - Comprehensive 14 Resolutions": "KEY RESOLUTIONS (Our Resolutions) - Comprehensive 14 Resolutions",
  "BJMP आधिकारिक घोषणा पत्र": "BJMP Official Manifesto",
  "हमारे 14 मूल संकल्प (14 Core Resolutions)": "Our 14 Core Resolutions",
  "भारतीय संस्कृति, राष्ट्रीय सुरक्षा, सामाजिक न्याय और संप्रभुता के संरक्षण हेतु पार्टी के प्रमुख नीतिगत निर्णय।": "The party's key policy decisions for the protection of Indian culture, national security, social justice and sovereignty.",
  "सांस्कृतिक संप्रभुता": "Cultural Sovereignty",
  "भारत को हिंदू राष्ट्र घोषित किया जाएगा।": "India will be declared a Hindu Rashtra.",
  "पर्यावरण एवं संसाधन": "Environment & Resources",
  "जल, जंगल, जमीन आदि प्राकृतिक संसाधनों की पूर्ण सुरक्षा करना।": "Ensure complete protection of natural resources including water, forests and land.",
  "चुनावी शुचिता": "Electoral Integrity",
  "चुनाव के दौरान राजनीतिक दलों द्वारा मुफ्त में रेवड़ी बांटने की घोषणा पर पूर्णतः प्रतिबंध लगाया जाएगा।": "Announcements by political parties to distribute free handouts during elections will be completely prohibited.",
  "आंतरिक सुरक्षा": "Internal Security",
  "राष्ट्र विरोधी तत्वों तथा समर्थकों को कानून बनाकर 15 वर्ष की सजा दिलवाई जाएगी।": "A law will be enacted to provide a 15-year sentence for anti-national elements and their supporters.",
  "कठोर दंड नीति": "Strict Punishment Policy",
  "आतंकवादी एवं लव जिहादी को मृत्युदंड 2 महीने के अंदर दिया जाएगा, न्यायालय में अनावश्यक अपील करने का अधिकार खत्म किया जाएगा।": "Terrorists and persons described by the party as involved in \"love jihad\" will be given the death penalty within two months, and the right to make unnecessary appeals in court will be removed.",
  "गो संरक्षण": "Cow Protection",
  "गौ हत्या पर देशव्यापी पूर्णतः प्रतिबंध लगाया जाएगा।": "A nationwide complete ban on cow slaughter will be imposed.",
  "शिक्षा क्रांति": "Education Revolution",
  "बच्चों के सर्वांगीण विकास हेतु सभी तहसीलों में आधुनिक कंप्यूटराइज्ड गुरुकुल विद्यालय खोले जाएंगे।": "Modern computerized Gurukul schools will be opened in all tehsils for the holistic development of children.",
  "आरक्षण शुचिता": "Reservation Integrity",
  "हिंदू पिछड़ा वर्ग, अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के आरक्षण में अन्य पंथ के लोगों को आरक्षण का लाभ पूर्णतः प्रतिबंधित रहेगा।": "People belonging to other faiths will be completely excluded from reservation benefits under the Hindu Other Backward Classes, Scheduled Castes and Scheduled Tribes categories.",
  "राष्ट्रीय पहचान": "National Identity",
  "सम्पूर्ण देश में अनिवार्य भारतीय नागरिकता रजिस्टर (NRC) बनाया जाएगा।": "A mandatory National Register of Indian Citizens (NRC) will be created across the country.",
  "घुसपैठ नियंत्रण": "Infiltration Control",
  "घुसपैठ नियंत्रण कानून बनाकर घुसपैठियों को 3 महीने के अंदर फांसी की सजा का प्रावधान किया जाएगा। घुसपैठ में किसी भी तरह का सहयोग करने वाले अधिकारी, कर्मचारी तथा नेताओं को आजन्म कारावास की सजा का कानून बनाया जाएगा।": "An infiltration-control law will provide for the death penalty for infiltrators within three months. A law will provide life imprisonment for officials, employees and leaders who assist infiltration in any way.",
  "धर्मांतरण रोक": "Prevention of Religious Conversion",
  "धर्मांतरण पूर्णतः प्रतिबंधित होगा तथा धर्मांतरित व्यक्तियों का शासकीय योजनाओं का लाभ बंद किया जाएगा।": "Religious conversion will be completely prohibited, and access to government schemes for converted persons will be discontinued.",
  "जनसांख्यिकी संतुलन": "Demographic Balance",
  "देश में कठोर जनसंख्या नियंत्रण कानून बनाया जाएगा।": "A strict population-control law will be enacted in the country.",
  "समान पाठ्यक्रम": "Common Curriculum",
  "देश में केवल एक भारतीय शिक्षा बोर्ड का संचालन किया जाएगा।": "Only one Indian education board will operate in the country.",
  "अंतिम एवं सर्वोच्च ध्येय वाक्य": "Final & Supreme Motto",
  "\"जाति पात की करो विदाई, हम सब हैं हिंदू भाई।\"": "\"Say goodbye to caste divisions; we are all Hindu brothers.\"",
  "LEADERSHIP ROSTER (नेतृत्व)": "LEADERSHIP ROSTER (Leadership)",
  "संगठनात्मक ढांचा": "Organizational Structure",
  "राष्ट्रीय एवं प्रांतीय नेतृत्व (BJMP Leadership)": "National & State Leadership (BJMP Leadership)",
  "भारतीय जन मोर्चा पार्टी (BJMP) का नेतृत्व अनुभवी, समर्पित एवं राष्ट्रहित के प्रति प्रतिबद्ध पदाधिकारियों द्वारा किया जाता है। संगठन का प्रत्येक पदाधिकारी संविधान, लोकतांत्रिक मूल्यों, जनसेवा एवं संगठनात्मक विकास के सिद्धांतों का पालन करते हुए देश एवं समाज की सेवा के लिए कार्यरत है।": "Bharatiya Jan Morcha Party (BJMP) is led by experienced and dedicated office-bearers committed to national interest. Every office-bearer works to serve the country and society while following the principles of the Constitution, democratic values, public service and organizational development.",
  "केंद्रीय नेतृत्व": "Central Leadership",
  "सर्वोच्च पद": "Highest Office",
  "राष्ट्रीय अध्यक्ष": "National President",
  "राष्ट्रीय कार्यकारिणी": "National Executive",
  "राष्ट्रीय सचिव": "National Secretary",
  "राष्ट्रीय महासचिव": "National General Secretary",
  "राष्ट्रीय उपाध्यक्ष": "National Vice President",
  "संस्थापक सदस्य": "Founding Member",
  "जिला उपाध्यक्ष (सतना)": "District Vice President (Satna)",
  "MEMBERSHIP CALL TO ACTION & ONBOARDING (सदस्यता)": "MEMBERSHIP CALL TO ACTION & ONBOARDING (Membership)",
  "राष्ट्रव्यापी सदस्यता अभियान": "Nationwide Membership Campaign",
  "भारतीय जन मोर्चा पार्टी (BJMP) से जुड़कर राष्ट्र निर्माण के अभियान का हिस्सा बनें।": "Join Bharatiya Jan Morcha Party (BJMP) and become part of the nation-building campaign.",
  "यह केवल एक दल की सदस्यता नहीं, बल्कि एक सशक्त, सुरक्षित और सांस्कृतिक रूप से गौरवान्वित अखंड भारत के निर्माण का जन-संकल्प है। अपनी ऊर्जा और क्षमता को राष्ट्रहित में समर्पित करें।": "This is not merely membership of a political party; it is a public commitment to building a strong, secure and culturally proud united India. Dedicate your energy and capabilities to the national interest.",
  "डिजिटल पहचान पत्र (E-Voter Slip / Membership Card) तुरंत प्राप्त करें": "Receive your digital identity document (E-Voter Slip / Membership Card) immediately",
  "प्रत्यक्ष विधानसभा एवं मंडल स्तर पर संगठनात्मक भागीदारी": "Direct organizational participation at Assembly and Mandal levels",
  "राष्ट्रीय कार्यक्रमों एवं रैलियों में प्राथमिक सहभागिता": "Priority participation in national programs and rallies",
  "सदस्यता प्रक्रिया": "Membership Process",
  "BJMP से जुड़ने के चरण": "Steps to Join BJMP",
  "ऑनलाइन आवेदन": "Online Application",
  "सदस्यता के लिए आवश्यक जानकारी आवेदन प्रक्रिया के माध्यम से दर्ज करें।": "Enter the required membership information through the application process.",
  "विवरण सत्यापन": "Information Verification",
  "प्रस्तुत जानकारी का आवश्यक संगठनात्मक सत्यापन किया जाएगा।": "The submitted information will undergo the required organizational verification.",
  "सदस्यता पुष्टि": "Membership Confirmation",
  "सत्यापन प्रक्रिया पूरी होने के बाद सदस्यता की पुष्टि की जाएगी।": "Membership will be confirmed after the verification process is completed.",
  "डिजिटल पहचान": "Digital Identity",
  "उपलब्ध होने पर डिजिटल पहचान पत्र / सदस्यता कार्ड प्राप्त करें।": "Receive the digital identity document / membership card when available.",
  "सदस्यता के लिए तैयार हैं?": "Ready to become a member?",
  "ऑनलाइन आवेदन प्रक्रिया शुरू करें।": "Start the online application process.",
  "सदस्यता के लिए आवेदन करें": "Apply for Membership",
  "आधिकारिक UPI भुगतान QR कोड": "Official UPI Payment QR Code",
  "स्कैन करके सहयोग राशि भेजें": "Scan to Send Your Contribution",
  "डिजिटल सहयोग": "Digital Contribution",
  "भारतीय जन मोर्चा पार्टी को डिजिटल माध्यम से सहयोग राशि प्रदान करें।": "Make a digital contribution to Bharatiya Jan Morcha Party.",
  "QR कोड स्कैन करके अपनी सुविधानुसार सहयोग राशि भेजें। भुगतान करने से पहले प्रदर्शित प्राप्तकर्ता नाम और UPI विवरण की पुष्टि करें।": "Scan the QR code to send a contribution at your convenience. Before making the payment, verify the displayed recipient name and UPI details.",
  "महत्वपूर्ण अपील": "Important Appeal",
  "कृपया भुगतान करने से पहले नीचे दिया गया योगदान फॉर्म ध्यानपूर्वक भरें और अपनी सही जानकारी जमा करें। कृपया वही नाम दर्ज करें जो उस बैंक खाते या UPI खाते में दर्ज है, जिससे आप सहयोग कर रहे हैं। फॉर्म सफलतापूर्वक सबमिट करने के बाद नीचे दिए गए QR कोड को स्कैन करके अपना सहयोग पूरा करें। भुगतान के बाद कृपया भुगतान की तारीख और अपना Transaction ID/UTR Number सुरक्षित रखें। आपकी सही जानकारी संस्था को प्राप्त सहयोग का उचित रिकॉर्ड बनाए रखने में सहायता करेगी।": "Before making the payment, please carefully fill in the contribution form below and submit your correct information. Please enter the same name that is registered with the bank account or UPI account from which you are making the contribution. After successfully submitting the form, scan the QR code below to complete your contribution. After payment, please keep the payment date and your Transaction ID/UTR Number safe. Accurate information helps the organization maintain a proper record of contributions received.",
  "पार्टी का केंद्रीय बैंक खाता विवरण": "Party Central Bank Account Details",
  "खाता धारक (Account Name):": "Account Holder (Account Name):",
  "बैंक का नाम (Bank):": "Bank Name (Bank):",
  "खाता संख्या (Account No):": "Account Number (Account No):",
  "IFSC कोड (IFSC Code):": "IFSC Code:",
  "कृपया भुगतान पश्चात UTR रसीद 1800-BJMP-INDIA पर साझा करें।": "Please share the UTR receipt after payment at 1800-BJMP-INDIA.",
  "दृश्य-श्रव्य मंच": "Audio-Visual Platform",
  "VIDEOS: जनसंवाद एवं संबोधन": "VIDEOS: Public Dialogues & Addresses",
  "पार्टी के प्रमुख जनसंवाद, संबोधनों और संगठनात्मक गतिविधियों के चुनिंदा वीडियो।": "Selected videos of the party's public dialogues, addresses and organizational activities.",
  "सभी वीडियो": "All Videos",
  "वीडियो संग्रह": "Video Collection",
  "तस्वीरें": "Photos",
  "जनआंदोलन एवं": "Public Movement &",
  "संगठन गतिविधियां": "Organizational Activities",
  "जमीनी स्तर पर सेवारत कार्यकर्ताओं, जनसंवाद, संगठनात्मक बैठकों एवं जनसेवा गतिविधियों के कुछ प्रमुख दृश्य।": "Selected glimpses of grassroots workers, public dialogues, organizational meetings and public-service activities.",
  "प्रमुख गतिविधि": "Featured Activity",
  "विशाल तिरंगा पदयात्रा, रीवा": "Grand Tricolour March, Rewa",
  "जनभागीदारी एवं संगठनात्मक अभियान": "Public Participation & Organizational Campaign",
  "किसान संवाद चौपाल": "Farmers' Dialogue Meeting",
  "सतना": "Satna",
  "राष्ट्रीय कार्यकारिणी बैठक": "National Executive Meeting",
  "नई दिल्ली": "New Delhi",
  "जनसेवा एवं राहत सामग्री वितरण": "Public Service & Relief Material Distribution",
  "कार्यकर्ता संवाद कार्यक्रम": "Workers' Dialogue Program",
  "जनसभा एवं जनसंवाद": "Public Meeting & Public Dialogue",
  "संगठनात्मक बैठक": "Organizational Meeting",
  "युवा कार्यकर्ता सम्मेलन": "Youth Workers' Conference",
  "ग्राम संपर्क अभियान": "Village Outreach Campaign",
  "महिला कार्यकर्ता सम्मेलन": "Women Workers' Conference",
  "सामाजिक सेवा अभियान": "Social Service Campaign",
  "जनजागरूकता अभियान": "Public Awareness Campaign",
  "क्षेत्रीय संगठन बैठक": "Regional Organizational Meeting",
  "कार्यकर्ता प्रशिक्षण कार्यक्रम": "Workers' Training Program",
  "स्थानीय जनसंवाद": "Local Public Dialogue",
  "जनसेवा गतिविधि": "Public Service Activity",
  "संगठन विस्तार अभियान": "Organizational Expansion Campaign",
  "संगठनात्मक जनसंपर्क": "Organizational Public Outreach",
  "जनआंदोलन एवं कार्यकर्ता सहभागिता": "Public Movement & Worker Participation",
  "संगठन की गतिविधियों और जनसंपर्क अभियानों की झलकियां": "Glimpses of organizational activities and public outreach campaigns",
  "राष्ट्र प्रथम, जनकल्याण सर्वोपरि। जनहित, पारदर्शी राजनीति और जमीनी लोकतंत्र के लिए समर्पित एक सशक्त राष्ट्रीय राजनीतिक मंच।": "Nation First, Public Welfare Above All. A strong national political platform dedicated to public interest, transparent politics and grassroots democracy.",
  "महत्वपूर्ण लिंक्स": "Important Links",
  "मुख्य पृष्ठ (Home)": "Home",
  "पार्टी परिचय (About BJMP)": "About BJMP",
  "राष्ट्रीय एवं प्रांतीय नेतृत्व (Leadership)": "National & State Leadership",
  "सदस्यता अभियान (Membership)": "Membership Campaign",
  "मीडिया व सूचना": "Media & Information",
  "फोटो गैलरी (Gallery)": "Photo Gallery",
  "वीडियो संग्रह (Videos)": "Video Collection",
  "गोपनीयता नीति (Privacy Policy)": "Privacy Policy",
  "नियम एवं शर्तें (Terms & Conditions)": "Terms & Conditions",
  "अस्वीकरण (Disclaimer)": "Disclaimer",
  "केंद्रीय कार्यालय संपर्क": "Central Office Contact",
  "सोशल मीडिया से जुड़ें": "Connect on Social Media",
  "© BJMP. All Rights Reserved. भारतीय जन मोर्चा पार्टी": "© BJMP. All Rights Reserved. Bharatiya Jan Morcha Party"
};

  const languageState = {
    current: localStorage.getItem("bjmp-language") || "hi",
    originalNodes: new WeakMap(),
  };

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function translateValue(value, language = languageState.current) {
    const normalized = normalizeText(value);
    if (language === "hi") return normalized;
    return translations[normalized] || normalized;
  }

  function translateTextNodes(language) {
    const root = document.body;
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    nodes.forEach((textNode) => {
      if (!languageState.originalNodes.has(textNode)) {
        languageState.originalNodes.set(textNode, textNode.nodeValue);
      }

      const original = languageState.originalNodes.get(textNode);
      const leading = (original.match(/^\s*/) || [""])[0];
      const trailing = (original.match(/\s*$/) || [""])[0];
      const core = original.trim();

      if (!core) return;

      const next = language === "en"
        ? (translations[normalizeText(core)] || core)
        : core;

      textNode.nodeValue = leading + next + trailing;
    });
  }

  function translateAttributes(language) {
    const elements = document.querySelectorAll(
      "[alt], [title], [aria-label], [data-title]"
    );

    elements.forEach((element) => {
      ["alt", "title", "aria-label", "data-title"].forEach((attr) => {
        if (!element.hasAttribute(attr)) return;

        const storageAttr = `data-original-${attr}`;

        if (!element.hasAttribute(storageAttr)) {
          element.setAttribute(storageAttr, element.getAttribute(attr));
        }

        const original = element.getAttribute(storageAttr);
        if (!original) return;

        const next = language === "en"
          ? (translations[normalizeText(original)] || original)
          : original;

        element.setAttribute(attr, next);
      });
    });
  }

  function updateLanguageUI(language) {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    const hindiBtn = document.getElementById("hindiBtn");
    const englishBtn = document.getElementById("englishBtn");

    if (hindiBtn) {
      hindiBtn.classList.toggle("font-bold", language === "hi");
      hindiBtn.classList.toggle("text-surface-variant/70", language !== "hi");
      hindiBtn.setAttribute("aria-pressed", language === "hi" ? "true" : "false");
    }

    if (englishBtn) {
      englishBtn.classList.toggle("font-bold", language === "en");
      englishBtn.classList.toggle("text-surface-variant/70", language !== "en");
      englishBtn.setAttribute("aria-pressed", language === "en" ? "true" : "false");
    }

    const metaDescription = document.getElementById("metaDescription");
    if (metaDescription) {
      metaDescription.content = language === "en"
        ? "Bharatiya Jan Morcha Party (BJMP) — Official Website"
        : "भारतीय जन मोर्चा पार्टी (BJMP) — आधिकारिक वेबसाइट";
    }

    document.title = language === "en"
      ? "Bharatiya Jan Morcha Party (BJMP)"
      : "भारतीय जन मोर्चा पार्टी (BJMP)";
  }

  function setLanguage(language) {
    if (!["hi", "en"].includes(language)) return;

    languageState.current = language;
    localStorage.setItem("bjmp-language", language);

    translateTextNodes(language);
    translateAttributes(language);
    updateLanguageUI(language);

    if (typeof window.renderBJMPVideos === "function") {
      window.renderBJMPVideos();
    }

    if (typeof window.refreshGalleryLanguage === "function") {
      window.refreshGalleryLanguage();
    }
  }

  window.bjmpSetLanguage = setLanguage;
  window.bjmpTranslate = translateValue;
  window.bjmpCurrentLanguage = () => languageState.current;

  /* ============================================================
     SMOOTH ANCHOR SCROLL + LANGUAGE BUTTONS
  ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const selector = link.getAttribute("href");

        if (!selector || selector === "#") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        const target = document.querySelector(selector);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    const pathLinks = [...document.querySelectorAll("[data-path]")];
    pathLinks.forEach((link) => {
      link.addEventListener("click", () => {
        pathLinks.forEach((item) => {
          item.classList.remove(
            "text-primary",
            "font-bold",
            "border-b-2",
            "border-primary"
          );
        });

        link.classList.add(
          "text-primary",
          "font-bold",
          "border-b-2",
          "border-primary"
        );
      });
    });

    const marquee = document.querySelector(".animate-marquee");

    document.addEventListener("visibilitychange", () => {
      if (!marquee) return;
      marquee.style.animationPlayState = document.hidden ? "paused" : "";
    });

    document.getElementById("hindiBtn")?.addEventListener("click", () => {
      setLanguage("hi");
    });

    document.getElementById("englishBtn")?.addEventListener("click", () => {
      setLanguage("en");
    });

    setLanguage(languageState.current);
  });

  /* ============================================================
     GALLERY LIGHTBOX
  ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxCounter = document.getElementById("lightboxCounter");
    const closeButton = document.getElementById("closeGallery");
    const previousButton = document.getElementById("galleryPrev");
    const nextButton = document.getElementById("galleryNext");

    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxCounter) return;

    let currentIndex = 0;

    function getGalleryTitle(item) {
      const original = item.getAttribute("data-original-data-title") || item.dataset.title || "";
      return languageState.current === "en"
        ? (translations[normalizeText(original)] || original)
        : original;
    }

    function openGallery(index) {
      if (!galleryItems.length) return;

      currentIndex = (index + galleryItems.length) % galleryItems.length;
      const item = galleryItems[currentIndex];

      const image = item.dataset.image;
      const title = getGalleryTitle(item);

      lightboxImage.src = image;
      lightboxImage.alt = title;
      lightboxTitle.textContent = title;
      lightboxCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;

      lightbox.classList.remove("hidden");
      lightbox.classList.add("flex");
      document.body.classList.add("overflow-hidden");
    }

    function closeGallery() {
      lightbox.classList.add("hidden");
      lightbox.classList.remove("flex");
      lightboxImage.src = "";
      document.body.classList.remove("overflow-hidden");
    }

    function nextImage() {
      openGallery(currentIndex + 1);
    }

    function previousImage() {
      openGallery(currentIndex - 1);
    }

    galleryItems.forEach((item, index) => {
      if (!item.hasAttribute("data-original-data-title")) {
        item.setAttribute("data-original-data-title", item.dataset.title || "");
      }

      item.addEventListener("click", () => openGallery(index));
    });

    closeButton?.addEventListener("click", closeGallery);
    nextButton?.addEventListener("click", nextImage);
    previousButton?.addEventListener("click", previousImage);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeGallery();
    });

    document.addEventListener("keydown", (event) => {
      if (lightbox.classList.contains("hidden")) return;

      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    });

    window.refreshGalleryLanguage = () => {
      if (!lightbox.classList.contains("hidden") && galleryItems[currentIndex]) {
        lightboxTitle.textContent = getGalleryTitle(galleryItems[currentIndex]);
        lightboxImage.alt = lightboxTitle.textContent;
      }
    };
  });

  /* ============================================================
     VIDEO DATA
  ============================================================ */
  const bjmpVideos = [
    {
      type: "youtube",
      id: "hPxvt29cbE8",
      titleHi: "जनसंवाद एवं सार्वजनिक संबोधन",
      titleEn: "Public Dialogue & Address",
      categoryHi: "जनसंवाद",
      categoryEn: "Public Dialogue"
    },
    {
      type: "youtube",
      id: "0vGh-ZMXuXM",
      titleHi: "राष्ट्रीय कार्यक्रम एवं संबोधन",
      titleEn: "National Program & Address",
      categoryHi: "कार्यक्रम",
      categoryEn: "Program"
    },
    {
      type: "youtube",
      id: "s3g1VipefsA",
      titleHi: "कार्यकर्ता सम्मेलन",
      titleEn: "Workers' Conference",
      categoryHi: "सम्मेलन",
      categoryEn: "Conference"
    },
    {
      type: "youtube",
      id: "faFmDBLjg7k",
      titleHi: "जनसभा एवं जनसंवाद",
      titleEn: "Public Meeting & Dialogue",
      categoryHi: "जनसभा",
      categoryEn: "Public Meeting"
    },
    {
      type: "youtube",
      id: "HItNwSW0yXQ",
      titleHi: "संगठनात्मक कार्यक्रम",
      titleEn: "Organizational Program",
      categoryHi: "संगठन",
      categoryEn: "Organization"
    },
    {
      type: "youtube",
      id: "IcHAcRnL_l8",
      titleHi: "पार्टी का सार्वजनिक कार्यक्रम",
      titleEn: "Party Public Program",
      categoryHi: "कार्यक्रम",
      categoryEn: "Program"
    },
    {
      type: "youtube",
      id: "gq5S2X8iOI8",
      titleHi: "संगठनात्मक गतिविधि",
      titleEn: "Organizational Activity",
      categoryHi: "कार्यक्रम",
      categoryEn: "Program"
    },
    {
      type: "youtube",
      id: "t_Hsi7RXwNk",
      titleHi: "संगठनात्मक गतिविधि",
      titleEn: "Organizational Activity",
      categoryHi: "कार्यक्रम",
      categoryEn: "Program"
    },
    {
      type: "youtube",
      id: "faFmDBLjg7k",
      titleHi: "संगठनात्मक गतिविधि",
      titleEn: "Organizational Activity",
      categoryHi: "कार्यक्रम",
      categoryEn: "Program"
    }
  ];

  function renderBJMPVideos() {
    const rail = document.getElementById("videoRail");
    if (!rail) return;

    if (!bjmpVideos.length) {
      rail.innerHTML = `
        <div class="w-full py-10 text-center text-slate-500">
          ${languageState.current === "en" ? "No videos available." : "कोई वीडियो उपलब्ध नहीं है।"}
        </div>
      `;
      return;
    }

    const language = languageState.current;

    rail.innerHTML = bjmpVideos.map((video) => {
      const title = language === "en" ? video.titleEn : video.titleHi;
      const category = language === "en" ? video.categoryEn : video.categoryHi;
      const thumbnail = video.type === "youtube"
        ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
        : (video.poster || "");
      const source = video.type === "youtube" ? video.id : video.src;

      return `
        <button
          type="button"
          class="video-card group text-left flex-none w-[300px] md:w-[340px] snap-start"
          data-video-type="${video.type}"
          data-video-source="${source}"
          data-video-title="${title.replace(/"/g, "&quot;")}"
        >
          <div class="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="relative aspect-video overflow-hidden bg-deep-navy-dark">
              <img
                src="${thumbnail}"
                alt="${title.replace(/"/g, "&quot;")}"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onerror="this.src='https://placehold.co/640x360/001B44/FFFFFF?text=BJMP+Video'"
              />
              <div class="absolute inset-0 bg-black/5 group-hover:bg-black/25 transition-colors"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i class="fa-solid fa-play text-deep-navy-dark text-xl ml-0.5"></i>
                </div>
              </div>
              <div class="absolute bottom-3 left-3 bg-deep-navy-dark/90 text-white text-[10px] px-2.5 py-1 rounded uppercase tracking-wider font-bold">
                ${category || "VIDEO"}
              </div>
            </div>
            <div class="p-4">
              <h4 class="text-sm md:text-base font-bold text-deep-navy-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                ${title}
              </h4>
            </div>
          </div>
        </button>
      `;
    }).join("");

    rail.querySelectorAll(".video-card").forEach((card) => {
      card.addEventListener("click", () => {
        openBJMPVideo(
          card.dataset.videoType,
          card.dataset.videoSource,
          card.dataset.videoTitle
        );
      });
    });
  }

  window.renderBJMPVideos = renderBJMPVideos;

  /* ============================================================
     VIDEO MODAL
  ============================================================ */
  function openBJMPVideo(type, source, title) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubePlayer");
    const localVideo = document.getElementById("localVideoPlayer");

    if (!modal || !iframe || !localVideo) return;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (type === "youtube") {
      localVideo.pause();
      localVideo.classList.add("hidden");
      iframe.classList.remove("hidden");
      iframe.src = `https://www.youtube.com/embed/${source}?autoplay=1&rel=0`;
      iframe.title = title || "BJMP Video";
    } else {
      iframe.src = "";
      iframe.classList.add("hidden");
      localVideo.classList.remove("hidden");
      localVideo.src = source;
      localVideo.play().catch(() => {});
    }
  }

  function closeVideo() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubePlayer");
    const localVideo = document.getElementById("localVideoPlayer");

    if (!modal || !iframe || !localVideo) return;

    iframe.src = "";
    localVideo.pause();
    localVideo.src = "";
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function scrollVideoRail(direction) {
    const rail = document.getElementById("videoRail");
    if (!rail) return;

    const amount = rail.clientWidth * 0.8;
    rail.scrollBy({
      left: direction * amount,
      behavior: "smooth"
    });
  }

  window.openBJMPVideo = openBJMPVideo;
  window.closeVideo = closeVideo;
  window.scrollVideoRail = scrollVideoRail;

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeVideo();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const videoModal = document.getElementById("videoModal");

    videoModal?.addEventListener("click", (event) => {
      if (event.target === videoModal) closeVideo();
    });

    renderBJMPVideos();
  });

  /* ============================================================
     MOBILE MENU
  ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileMenuButton || !mobileMenu) return;

    mobileMenuButton.setAttribute("aria-expanded", "false");

    mobileMenuButton.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("show-menu");

      if (isOpen) {
        mobileMenu.classList.remove("show-menu");
        mobileMenu.classList.add("hidden-menu");
        mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileMenuButton.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden-menu");
        mobileMenu.classList.add("show-menu");
        mobileMenuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        mobileMenuButton.setAttribute("aria-expanded", "true");
      }
    });

    document.querySelectorAll("#mobileMenu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("show-menu");
        mobileMenu.classList.add("hidden-menu");
        mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileMenuButton.setAttribute("aria-expanded", "false");
      });
    });
  });

})();
