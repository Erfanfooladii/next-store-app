interface ListContent {
    id: number;
    name: string;
}

interface ListButton {
    headName: string;
    listContent: ListContent[];
}

export const listButtons: ListButton[] = [
    {
        headName: "Get to Know Us",
        listContent: [
            { id: 1, name: "Careers" },
            { id: 2, name: "Accessibility" },
            { id: 3, name: "Sustainability" },
            { id: 4, name: "Investor Relations" },
            { id: 5, name: "Press Center" },
        ]
    },
    {
        headName: "Make Money with Us",
        listContent: [
            { id: 1, name: "Become an Affiliate" },
            { id: 2, name: "Protect & Build Your Brand" },
            { id: 3, name: "Become a Delivery Driver" },
            { id: 4, name: "Self-Publish with Us" }
        ]
    },
    {
        headName: "Let Us Help You",
        listContent: [
            { id: 1, name: "Your Account" },
            { id: 2, name: "Your Orders" },
            { id: 3, name: "Shipping Rates & Policies" },
            { id: 4, name: "Returns & Replacements" }
        ]
    },
];