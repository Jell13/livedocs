import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useInboxNotifications, useUnreadInboxNotificationsCount } from "@liveblocks/react/suspense"
import Image from "next/image"


const Notifications = () => {

    const { inboxNotifications } = useInboxNotifications()
    const { count } = useUnreadInboxNotificationsCount()

    const unreadNotifications = inboxNotifications.filter((notification) => !notification.readAt)
  return (
    <Popover>
        <PopoverTrigger className="relative flex size-10 items-center justify-center rounded-lg">
            <Image
            src={"/assets/icons/bell.svg"}
            alt="inbox"
            height={24}
            width={24}/>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  )
}

export default Notifications
