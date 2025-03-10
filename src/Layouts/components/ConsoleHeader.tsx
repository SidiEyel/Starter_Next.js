'use client'; 

import React, { useEffect, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { Bell, LogOut, Menu, Settings, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { logoutUser } from "@/state";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { CONSOLE_MENU } from "./console-menu";
import flags from "react-phone-number-input/flags";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import auth from "@/helpers/auth";
import { useTranslationRouter } from "@/hooks/useTranslationRouter";
import logo from "@/assets/logo.png"

const LANGUAGES: any = {
    en: { 
        Icon: flags['US'],
    },
    fr: { 
        Icon: flags['FR']
    },
    ar: { 
        Icon: flags['SA']
    },
}

export const ConsoleHeader = withTranslation()(({ t }) => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const { i18n: { language, changeLanguage, dir } } = useTranslation();
    const { navigate, isCurrentPath } = useTranslationRouter();
    const [username, setUsername] = useState('');
    const isRtl = dir() === 'rtl'

    const changeLanguageAction = (lang: string) => {
        changeLanguage(lang);
        // route to the same page with the new language
        const langPath = pathname.split('/')[1];
        const pathWithoutLang = pathname.replace(`/${langPath}`, '');
        navigate(pathWithoutLang);
    }
      
    const handleLogout = () => {
        dispatch(logoutUser(navigate));
    }

    const handleProfile = () => {
        navigate('#');
    }

    useEffect(() => {
        setUsername(auth.getUserInfo()?.username);
    }, []);

    return (
        <header className="flex h-14 items-center gap-4 bg-primary text-accent px-4 lg:h-[60px] lg:px-6 border-b border-accent-dark">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5 text-secondary" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        {
                            CONSOLE_MENU.map((group: any) => 
                                group.items.map((item: any, index: number) => (

                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl 
                                         py-2 text-muted-foreground hover:text-foreground ${isCurrentPath(item.href) ? 'text-secondary' : ''}`}

                                >
                                    <item.icon className="w-4 h-4"/>
                                    {t(item.title)}
                                </Link>
                                ))
                                
                            )
                        }
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <div>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={15}
                        height={15}
                    />
                </div>
            </div>
            <div className="hidden md:flex">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer flex justify-between items-center gap-4">
                            {
                                React.createElement(LANGUAGES[language].Icon, {
                                    className: 'h-4 w-4'
                                })
                            }
                            <span className="sr-only">Toggle language menu</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                        <DropdownMenuLabel className={`flex w-full ${isRtl ? 'justify-end' : ''}`}>{t("languages")}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            Object.keys(LANGUAGES).map((langKey, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    onClick={() => changeLanguageAction(langKey)}
                                >
                                    <div className={`flex items-center w-full ${isRtl ? 'justify-end' : ''}`}>
                                        {isRtl ? (
                                            <>     
                                                <span className="mr-2">{t(langKey)}</span>  
                                                {
                                                    React.createElement(LANGUAGES[langKey].Icon, {
                                                        className: 'h-4 w-4'
                                                    })
                                                }
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    React.createElement(LANGUAGES[langKey].Icon, {
                                                        className: 'h-4 w-4'
                                                    })
                                                }
                                                <span className="ml-2">{t(langKey)}</span>
                                            </>
                                        )
                                        }
                                    </div>
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Settings className="hidden md:flex w-4 h-4" />
            <Bell className="hidden md:flex w-4 h-4" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage className="cursor-pointer" src="https://avatars.githubusercontent.com/u/100689962?s=96&v=4" alt="@sidiEyel" />
                                <AvatarFallback>
                                    {username?.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-sm"> {username} </span>
                            <span className="sr-only">Toggle user menu</span>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel className={`flex w-full ${isRtl ? 'justify-end' : ''}`}>{t("my_account")}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={`flex w-full ${isRtl ? 'justify-end' : ''} cursor-pointer`} onSelect={handleProfile}>
                        {isRtl ? 
                            (
                                <>
                                    <p>{t("profile")}</p>
                                    <User className="w-4 h-4" />
                                </>
                            ) : 
                            (
                                <>
                                    <User className="w-4 h-4" />
                                    <p>{t("profile")}</p>
                                </>
                            )
                        }
                    </DropdownMenuItem>
                    <DropdownMenuItem  className={`flex w-full ${isRtl ? 'justify-end' : ''} cursor-pointer md:hidden`}>
                        {isRtl ? 
                            (
                                <>
                                    <p>{t("settings")}</p>
                                    <Settings className="w-4 h-4" />
                                </>
                            ) : 
                            (
                                <>
                                    <Settings className="w-4 h-4" />
                                    <p>{t("settings")}</p>
                                </>
                            )
                        }
                    </DropdownMenuItem>
                    <DropdownMenuItem className={`flex w-full ${isRtl ? 'justify-end' : ''} cursor-pointer md:hidden`}>
                        {isRtl ? 
                            (
                                <>
                                    <p>{t("notification")}</p>
                                    <Bell className="w-4 h-4" />
                                </>
                            ) : 
                            (
                                <>
                                    <Bell className="w-4 h-4" />
                                    <p>{t("notification")}</p>
                                </>
                            )
                        }
                    </DropdownMenuItem>
                    <DropdownMenuItem className={`flex w-full ${isRtl ? 'justify-end' : ''} cursor-pointer md:hidden`}>       
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                {isRtl ? (
                                    <div className="cursor-pointer flex justify-between items-center gap-2">
                                        <p>{t("languages")}</p>
                                        {
                                            React.createElement(LANGUAGES[language].Icon, {
                                                className: 'h-4 w-4'
                                            })
                                        }
                                        <span className="sr-only">Toggle language menu</span>
                                    </div>
                                ) : (
                                    <div className="cursor-pointer flex justify-between items-center gap-2">
                                        {
                                            React.createElement(LANGUAGES[language].Icon, {
                                                className: 'h-4 w-4'
                                            })
                                        }
                                        <p>Languages</p>
                                        <span className="sr-only">Toggle language menu</span>
                                    </div>
                                )}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel className={`flex w-full ${isRtl ? 'justify-end' : ''}`}>{t("languages")}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {
                                    Object.keys(LANGUAGES).map((langKey, index) => (
                                        <DropdownMenuItem
                                            key={index}
                                            onClick={() => changeLanguageAction(langKey)}
                                        >
                                            <div className={`flex items-center w-full ${isRtl ? 'justify-end' : ''}`}>
                                                {isRtl ? (
                                                    <>     
                                                        <span className="mr-2">{t(langKey)}</span>  
                                                        {
                                                            React.createElement(LANGUAGES[langKey].Icon, {
                                                                className: 'h-4 w-4'
                                                            })
                                                        }
                                                    </>
                                                ) : (
                                                    <>
                                                        {
                                                            React.createElement(LANGUAGES[langKey].Icon, {
                                                                className: 'h-4 w-4'
                                                            })
                                                        }
                                                        <span className="ml-2">{t(langKey)}</span>
                                                    </>
                                                )
                                                }
                                            </div>
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={`flex w-full ${isRtl ? 'justify-end' : ''} cursor-pointer`} onSelect={handleLogout}>
                        {isRtl ? 
                            (
                                <>
                                    <p>{t("logout")}</p>
                                    <LogOut className="w-4 h-4" />
                                </>
                            ) : 
                            (
                                <>
                                    <LogOut className="w-4 h-4" />
                                    <p>{t("logout")}</p>
                                </>
                            )
                        }
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> 
        </header>
    )
    
});