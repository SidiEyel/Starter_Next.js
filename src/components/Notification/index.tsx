import { notification } from "antd";
import { CircleCheck, X } from "lucide-react";

export const formatNotification = (payload: any) => {
    const { title, success } = payload;

    if (success) {
        notification.success({
            message: <p className="text-sm font-medium text-[#2A412D]">{title}</p>,
            description: null,
            icon: <CircleCheck className="text-[#241213]"/>,
            closeIcon: <X className="text-white w-4 h-4" />,
            placement: 'topRight', 
            style: { width: '500px', height: '60px'},
            className: ' bg-[#87C38F] text-[#2A412D]'
        });
    } else {
        notification.error({
            message: <p className="text-sm font-medium text-[#241213]">{title}</p>,
            description: null,
            icon: <CircleCheck className="text-[#241213]"/>,
            closeIcon: <X className="text-white w-4 h-4" />,
            placement: 'topRight',
            style: { width: '500px', height: '60px'},
            className: 'bg-[#E0878C] text-[#241213]'
        });

    }
};