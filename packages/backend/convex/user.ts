import { mutation, query } from "./_generated/server";

export const getManyUser = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect();
        return users;
    }
})

export const addUser = mutation({
    args: {},
    handler: async (ctx) => {

        const identify = await ctx.auth.getUserIdentity();

        if (identify === null) {
            throw new Error("Not Authenticated!");
        }

        const orgId = identify.orgId as string;

        if (!orgId) {
            throw new Error("Missing organization");
        }

        const userId = await ctx.db.insert("users", {
            name: "Suraj"
        })
        return userId;
    }
})