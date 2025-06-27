import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Soldier Movement Monitoring Device',
    description: 'Developed a non-satellite soldier movement monitoring device with advantages of cost-effectiveness, minimal frequency congestion in forested areas, and reduced signal interference in bad weather conditions.',
    technologies: ['IoT', 'RF Communication', 'Embedded Systems', 'C++'],
    year: 2020,
    image: ['/images/SiluetStarPrajuritsimple.png','/images/SiluetStarPrajuritsimple1.png'],
  },
  {
    id: '2',
    title: 'Smartshoes',
    description: 'Developed smart shoes that detect pressure points on feet to identify habitual foot positions and their effects, providing recommendations for optimal posture.',
    technologies: ['IoT', 'Pressure Sensors', 'Machine Learning', 'Python'],
    year: 2020,
    image: ['/images/SmartshoesPosisiKaki0.png', '/images/SmartshoesPosisiKaki1.png'],
  },
  {
    id: '3',
    title: 'Smartgloves',
    description: 'Developed boxing gloves with integrated sensors to detect acceleration, rotation, and power of punches, providing recommendations on proper positioning and technique.',
    technologies: ['IoT', 'Motion Sensors', 'Data Analytics', 'Python'],
    year: 2021,
    image: ['/images/SmartglovesTeknologi0.png', '/images/SmartglovesTeknologi1.png'],
  },
  {
    id: '4',
    title: 'Asetracking',
    description: 'Developed a device for monitoring assets at specific locations, enabling identification of both position and quantity of assets present in an area.',
    technologies: ['IoT', 'RFID', 'Location Tracking', 'Java'],
    year: 2021,
    image: ['/images/PemantauanPosisiAset0.png', '/images/PemantauanPosisiAset1.png', '/images/PemantauanPosisiAset2.png'],
  },
  {
    id: '5',
    title: 'Smartparking',
    description: 'Developed a system that helps car users book parking spots in advance, ensuring guaranteed parking spaces and eliminating the need to search for spots.',
    technologies: ['IoT','Web Development', 'Mobile App', 'Payment Integration', 'React Native'],
    year: 2022,
    image: ['/images/SmartParkingSolution0.png', '/images/SmartParkingSolution1.png'],
  },
  {
    id: '6',
    title: 'Smartbed',
    description: 'Developed a hospital smart bed with electrical height adjustment and automated health treatment functions.',
    technologies: ['IoT', 'Healthcare', 'Embedded Systems', 'C++'],
    year: 2022,
    image: ['/images/KasurPintarRumahSakit0.png', '/images/KasurPintarRumahSakit1.png', '/images/KasurPintarRumahSakit2.png'],
  },
  {
    id: '7',
    title: 'Ship Monitoring System',
    description: 'Developed a monitoring device for tank volume, engine vibration, and temperature for ships to collect voyage data and enable accurate calculation of operational costs and vessel performance.',
    technologies: ['IoT', 'Sensors', 'Data Analytics', 'Python'],
    year: 2023,
    image: ['/images/AlatPemantauKapal0.png', '/images/AlatPemantauKapal1.png', '/images/AlatPemantauKapal2.png'],
  },
  {
    id: '8',
    title: 'Hospital Information and Management System',
    description: 'Currently developing a comprehensive Hospital Information and Management System to streamline hospital operations, patient management, and administrative workflows.',
    technologies: ['Next.js', 'NestJS', 'MySQL', 'TypeScript', 'Full-Stack Development'],
    year: 2024,
    image: ['/images/DashboardPasienDokterKunjungan.png', '/images/DashboardStatistik.png', '/images/DashboardPasienData.png'],
    link: "https://github.com/harissukasno"
  },
]; 