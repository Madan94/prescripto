import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconQrcode,
  IconWallet
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/pharmacyDashboard",
  },
  {
    navlabel: true,
    subheader: "SERVICES",
  },
  {
    id: uniqueId(),
    title: "Scan QR Code",
    icon: IconQrcode,
    href: "/pharmacyDashboard/utilities/qrcode",
  },
  {
    id: uniqueId(),
    title: "Live Prescriptions",
    icon: IconCopy,
    href: "/pharmacyDashboard/utilities/prescription",
  },
  {
    navlabel: true,
    subheader: "ANALYTICS",
  },
  {
    id: uniqueId(),
    title: "Manage Prescriptions",
    icon: IconLogin,
    href: "/pharmacyDashboard/utilities/manageprescription",
  },
  {
    id: uniqueId(),
    title: "Crypto Wallet",
    icon: IconWallet,
    href: "/pharmacyDashboard/utilities/cryptowallet",
  },
  {
    navlabel: true,
    subheader: "OTHERS",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Ask your Query",
    icon: IconAperture,
    href: "/sample-page",
  },

];

export default Menuitems;
