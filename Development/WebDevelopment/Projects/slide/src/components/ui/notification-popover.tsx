"use client";

import React, { useState } from "react";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Notification = {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
};

interface NotificationItemProps {
  notification: Notification;
  index: number;
  onMarkAsRead: (id: string) => void;
  textColor?: string;
  hoverBgColor?: string;
  dotColor?: string;
}

const NotificationItem = ({
  notification,
  index,
  onMarkAsRead,
  textColor = "text-white",
  dotColor = "bg-white",
  hoverBgColor = "hover:bg-[#ffffff37]",
}: NotificationItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    key={notification.id}
    className={cn(`p-4 ${hoverBgColor} cursor-pointer transition-colors`)}
    onClick={() => onMarkAsRead(notification.id)}
  >
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
        {!notification.read && (
          <span className={`h-1 w-1 rounded-full ${dotColor}`} />
        )}
        <h4 className={`text-sm font-medium ${textColor}`}>
          {notification.title}
        </h4>
      </div>

      <span className={`text-xs opacity-80 ${textColor}`}>
        {notification.timestamp.toLocaleDateString()}
      </span>
    </div>
    <p className={`text-xs opacity-70 mt-1 ${textColor}`}>
      {notification.description}
    </p>
  </motion.div>
);

interface NotificationListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  textColor?: string;
  hoverBgColor?: string;
  dividerColor?: string;
}

const NotificationList = ({
  notifications,
  onMarkAsRead,
  textColor,
  hoverBgColor,
  dividerColor = "divide-gray-200/40",
}: NotificationListProps) => (
  <div className={`divide-y ${dividerColor}`}>
    {notifications.map((notification, index) => (
      <NotificationItem
        key={notification.id}
        notification={notification}
        index={index}
        onMarkAsRead={onMarkAsRead}
        textColor={textColor}
        hoverBgColor={hoverBgColor}
      />
    ))}
  </div>
);

interface NotificationPopoverProps {
  notifications?: Notification[];
  onNotificationsChange?: (notifications: Notification[]) => void;
  buttonClassName?: string;
  popoverClassName?: string;
  textColor?: string;
  hoverBgColor?: string;
  dividerColor?: string;
  headerBorderColor?: string;
}

export const NotificationPopover = ({
  notifications: initialNotifications = dummyNotifications,
  onNotificationsChange,
  buttonClassName = "w-10 h-10 rounded-xl bg-[#11111198] hover:bg-[#111111d1] shadow-[0_0_20px_rgba(0,0,0,0.2)]",
  popoverClassName = "bg-[#000000] ",
  textColor = "text-white",
  hoverBgColor = "hover:bg-[#ffffff37]",
  dividerColor = "divide-gray-200/40",
  headerBorderColor = "border-gray-200/50",
}: NotificationPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleOpen = () => setIsOpen(!isOpen);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((n) => ({
      ...n,
      read: true,
    }));
    setNotifications(updatedNotifications);
    onNotificationsChange?.(updatedNotifications);
  };

  const markAsRead = (id: string) => {
    const updatedNotifications = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updatedNotifications);
    onNotificationsChange?.(updatedNotifications);
  };

  return (
    <div className={`relative ${textColor}`}>
      <Button
        onClick={toggleOpen}
        size="icon"
        className={cn("relative", buttonClassName)}
      >
        <Bell size={16} color="#3352CC" fill="#3352CC" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#3352CC] rounded-full flex items-center justify-center text-xs border text-white">
            {unreadCount}
          </div>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute right-0 mt-2 w-80 max-h-[400px] overflow-y-auto rounded-xl shadow-lg bg-[#1D1D1D] radial--gradient--automations z-50 border",
              // popoverClassName
            )}
          >
            <div
              className={`p-4 border-b ${headerBorderColor} flex justify-between items-center`}
            >
              <h3 className="text-sm font-medium">Notifications</h3>
              <Button
                onClick={markAllAsRead}
                variant="ghost"
                size="sm"
                className={`text-xs ${hoverBgColor} hover:text-white`}
              >
                Mark all as read
              </Button>
            </div>

            <NotificationList
              notifications={notifications}
              onMarkAsRead={markAsRead}
              textColor={textColor}
              hoverBgColor={hoverBgColor}
              dividerColor={dividerColor}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const dummyNotifications: Notification[] = [
  {
    id: "1",
    title: "Create Automation",
    description: "The intention of the message will be automatically detected",
    timestamp: new Date(),
    read: false,
  },
  {
    id: "2",
    title: "Upgrade to Smart AI",
    description: "Unlock all features including AI and more",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: "3",
    title: "Welcome to Link ?",
    description: "Automate your Instagram Now",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: true,
  },
];
