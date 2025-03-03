import { useNavigate } from "react-router-dom";
import { ToastAction } from "../ui/toast";

type NotificationActionProps = {
    label: string;
    url: string;
    t?: (key: string) => string;
}

export const NotificationAction = ({
    label,
    url
}: NotificationActionProps) => {
    const navigate = useNavigate();
    return (
        <ToastAction 
            altText="notification action" 
            onClick={ () => navigate(url) }
        >
            {label}
        </ToastAction>
    )
}

export const RefreshAction = () => {
    return (
        <ToastAction 
            altText="notification action" 
            onClick={ () => window.location.reload() }
        >
            Actualiser
        </ToastAction>
    )
}
