interface ListContent {
    id: number;
    name: string;
}

interface ListButton {
    headName: string;
    listContent: ListContent[];
}

interface ListButtons {
    list_1: ListButton;
    list_2: ListButton;
    list_3: ListButton;
}

export const listButtons: ListButtons = {
    list_1: {
        headName: "Get to Know Us",
        listContent: [
            { id: 1, name: "Careers" },
            { id: 2, name: "Accessibility" },
            { id: 3, name: "Sustainability" },
            { id: 4, name: "Investor Relations" },
            { id: 5, name: "Press Center" },
        ]
    },
    list_2: {
        headName: "Make Money with Us",
        listContent: [
            { id: 1, name: "Become an Affiliate" },
            { id: 2, name: "Protect & Build Your Brand" },
            { id: 3, name: "Become a Delivery Driver" },
            { id: 4, name: "Self-Publish with Us" }
        ]
    },
    list_3: {
        headName: "Let Us Help You",
        listContent: [
            { id: 1, name: "Your Account" },
            { id: 2, name: "Your Orders" },
            { id: 3, name: "Shipping Rates & Policies" },
            { id: 4, name: "Returns & Replacements" }
        ]
    },
};