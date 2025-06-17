import React from "react";

const Profile: React.FC = () => {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0TVuMjoMSiMrPX8rmMR3D2_erzHoNT4Anup9Vx1vurKaVnxC3xZLaqAXVQpe9C_tr1yske4Z6xCc9dHKYRQ6X01PEAUvJSLWVQZOFPdoc1uZlkVl3HPJmVXQ4r8Os_vuUQNdEheLXAdzOt1h7lgJY3OEpSIEkVYJP92XKIFk6Da0LlvlKDuN_--dZc2dKF3270pF-nQj4MwigZpUG4OCEAapbUEi5f4eO8ZrMiO1zmn-KsWpnarpFN7JAgS6_5zlfeksqXBfBJdR9")'
                    }}
                >
                    <div className="flex flex-col gap-2 text-left">
                        <h1
                            className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                        >
                            Haris Khoiruddin
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">Software and Firmware Engineer</h2>
                        <div className="flex flex-col @[480px]:flex-row @[480px]:items-center gap-2 @[480px]:gap-8">
                            <div className="flex-1">
                                <p className="text-white text-xs @[480px]:text-base">
                                4+ years of hands-on experience in <span className="font-semibold">Software & Firmware Engineering</span>. 
                                Passionate about building robust, efficient systems from bare metal to the cloud. 
                                Proven track record in architecting and developing firmware for microcontrollers, delivering reliable embedded solutions for real-world applications.
                                <br className="hidden @[480px]:block" />
                                <span className="hidden @[480px]:inline">Currently expanding my stack with <span className="font-semibold">Next.js</span>, <span className="font-semibold">NestJS</span>, and <span className="font-semibold">MySQL</span> to bridge embedded and web technologies.</span>
                                </p>
                                <p className="text-white text-xs @[480px]:text-base @[480px]:hidden mt-1">
                                Currently learning <span className="font-semibold">Next.js</span>, <span className="font-semibold">NestJS</span>, and <span className="font-semibold">MySQL</span>.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col items-start @[480px]:items-end">
                                <ul className="text-white text-xs @[480px]:text-base space-y-1 text-left @[480px]:text-right">
                                    <li>
                                        <span className="font-mono font-bold text-blue-200">+ Embedded C/C++</span> for microcontrollers
                                    </li>
                                    <li>
                                        <span className="font-mono font-bold text-blue-200">+ RTOS & Bare Metal</span> development
                                    </li>
                                    <li>
                                        <span className="font-mono font-bold text-blue-200">+ Protocols:</span> UART, SPI, I2C, CAN, BLE
                                    </li>
                                    <li>
                                        <span className="font-mono font-bold text-blue-200">+ CI/CD</span> for firmware & web
                                    </li>
                                    <li>
                                        <span className="font-mono font-bold text-blue-200">+ Fullstack:</span> Next.js, NestJS, MySQL
                                    </li>
                                    <li>
                                        <span className="font-mono font-bold text-blue-200">+ Problem Solver</span> & fast learner
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    );
};

export default Profile;