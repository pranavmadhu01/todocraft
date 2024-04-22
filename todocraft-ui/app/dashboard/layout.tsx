import DashboardHeader from "@/components/misc/dashboardHeader";
import classes from "./styles.module.css";
import AuthenticatedLayout from "@/utils/auth";
export default function DashboardLayout({ children }: { children: any }) {
  return (
    <AuthenticatedLayout>
      <div className={classes.layout_wrapper}>
        <DashboardHeader />
        {children}
      </div>
    </AuthenticatedLayout>
  );
}
