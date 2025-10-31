"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layout/auth-layout";
import { OrgSelectionView } from "../views/org-selection-view";

const OrganisationGuard = ({ children }: { children: React.ReactNode }) => {
    const { organization } = useOrganization();

    if (!organization) {
        return (
            <AuthLayout>
                <OrgSelectionView />
            </AuthLayout>
        )
    }

    return (
        <>{children}</>
    )
}

export default OrganisationGuard;