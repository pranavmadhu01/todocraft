import DashboardHeader from "@/components/misc/dashboardHeader";
import classes from "./styles.module.css";
export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div className={classes.layout_wrapper}>
      <DashboardHeader />
      {children}
    </div>
  );
}
