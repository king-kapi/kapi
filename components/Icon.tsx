import styles from "@/styles/Icon.module.css";
import Image from "next/image";
import React from "react";

export type IconDef = {
  src: string,
  height: number,
  width: number
}

// generated by generate-icons.ts
export const Icons: { [key: string]: IconDef } = {
  "ADD": { "src": "/icons/add.svg", "width": 20, "height": 18 },
  "ADD_FRIEND": { "src": "/icons/add_friend.svg", "width": 24, "height": 24 },
  "CARAT_DOWN": { "src": "/icons/carat_down.svg", "width": 13, "height": 7 },
  "CARAT_DOWN_LARGE": { "src": "/icons/carat_down_large.svg", "width": 16, "height": 10 },
  "CARAT_LEFT": { "src": "/icons/carat_left.svg", "width": 7, "height": 12 },
  "CARAT_LEFT_LARGE": { "src": "/icons/carat_left_large.svg", "width": 10, "height": 17 },
  "CARAT_RIGHT": { "src": "/icons/carat_right.svg", "width": 7, "height": 12 },
  "CARAT_RIGHT_LARGE": { "src": "/icons/carat_right_large.svg", "width": 10, "height": 17 },
  "CARAT_UP": { "src": "/icons/carat_up.svg", "width": 12, "height": 7 },
  "CARAT_UP_LARGE": { "src": "/icons/carat_up_large.svg", "width": 16, "height": 10 },
  "CROWN": { "src": "/icons/crown.svg", "width": 24, "height": 24 },
  "DENY_DEFAULT": { "src": "/icons/deny_default.svg", "width": 18, "height": 18 },
  "DENY_SMALL": { "src": "/icons/deny_small.svg", "width": 10, "height": 10 },
  "EDIT": { "src": "/icons/edit.svg", "width": 24, "height": 24 },
  "EDIT_PENCIL": { "src": "/icons/edit_pencil.svg", "width": 19, "height": 19 },
  "EXIT": { "src": "/icons/exit.svg", "width": 18, "height": 18 },
  "FIND_BUDDY_BARA": {"src": "/icons/find_buddy_bara.svg", "width": 180, "height": 80},
  "FIND_LOBBY_BARA": {"src": "/icons/find_lobby_bara.svg", "width": 110, "height": 80},
  "CREATE_LOBBY_BARA": {"src": "/icons/create_lobby_bara.svg", "width": 88, "height": 80},
  "LIST_VIEW": { "src": "/icons/list_view.svg", "width": 24, "height": 24 },
  "PIN": { "src": "/icons/pin.svg", "width": 24, "height": 24 },
  "REPLY": { "src": "/icons/reply.svg", "width": 18, "height": 14 },
  "REROLL": { "src": "/icons/reroll.svg", "width": 24, "height": 24 },
  "SEARCH": { "src": "/icons/search.svg", "width": 20, "height": 20 },
  "TOGGLE_VERTICAL": { "src": "/icons/toggle_vertical.svg", "width": 24, "height": 24 }
};

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconDef
}

const Icon = ({ icon, ...props }: IconProps) => {
  return <div className={styles.Icon} {...props}>
    <Image {...icon} alt={icon.src}/>
  </div>;
};

export default Icon;