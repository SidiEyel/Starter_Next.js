'use client';

import { ScrollArea } from "@/components/ui/scroll-area"
import React, { PropsWithChildren } from "react"
import { CONSOLE_MENU } from "./console-menu"
import { useTranslation } from "react-i18next"
import { ConsoleHeader } from "./ConsoleHeader"
import { useTranslationRouter } from "@/hooks/useTranslationRouter";
import { useAccess } from "@/hooks/useAccess";

export const ConsoleContent = ({ children }: PropsWithChildren) => {
    const { hasMenuAccess } = useAccess();
    const { navigate, isCurrentPath } = useTranslationRouter();
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl'

    return (
        <div>
            <ConsoleHeader />
            <div className="grid min-h-console w-full md:grid-cols-[160px_1fr] lg:grid-cols-[180px_1fr]">
                <div className="hidden bg-primary md:block">
                    <div className="flex-1 flex p-2">                 
                        <ScrollArea className="h-[576px]">
                            <nav className="grid items-start gap-4 text-sm font-medium p-4">
                                {
                                    CONSOLE_MENU.map((group, index) => (
                                        <div key={index} className="flex flex-col gap-4">
                                            <h3 className="text-base font-bold text-accent">
                                                {t(group.groupTitle)}
                                            </h3>
                                            {
                                                group.items.map((item, idx) => (
                                                    hasMenuAccess(item.title) && (
                                                        <span
                                                            key={idx}
                                                            onClick={() => navigate(item.href)}
                                                            className={`cursor-pointer flex items-center ${isRtl ? 'justify-end' : 'justify-start'} gap-2 py-2 
                                                            transition-all text-accent hover:text-secondary 
                                                            ${isCurrentPath(item.href) ? 'text-secondary' : ''}`}
                                                        >
                                                             {isRtl ? (
                                                                <>
                                                                    <span>{t(item.title)}</span>
                                                                    {React.createElement(item.icon, {
                                                                        className: 'h-4 w-4'
                                                                    })}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    {React.createElement(item.icon, {
                                                                        className: 'h-4 w-4'
                                                                    })}
                                                                    <span>{t(item.title)}</span>
                                                                </>
                                                            )}
                                                        </span>
                                                    )
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </nav>
                        </ScrollArea>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-2xl p-2">
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-white z-[5px]">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
