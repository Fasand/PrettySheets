const flexbox_data = [
    {
        "title": "Flex Direction",
        "description-short": "flex-direction: row | row-reverse | column | column-reverse",
        "description-long": "",
    },  
    {
        "title": "Flex Wrap",
        "description-short": "flex-wrap: nowrap | wrap | wrap-reverse",
        "description-long": "",
    },
    {
        "title": "Justify Content",
        "description-short": "justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly",
        "description-long": "",
    },
    {
        "title": "Align Items",
        "description-short": "align-items: flex-start | flex-end | center | baseline | stretch",
        "description-long": "",
    },
    {
        "title": "Align Content",
        "description-short": "align-content: flex-start | flex-end | center | space-between | space-around | stretch",
        "description-long": "",
    },
    {
        "title": "Order",
        "description-short": "order: 0",
        "description-long": "",
    },
    {
        "title": "Flex Grow",
        "description-short": "flex-grow: 0",
        "description-long": "",
    },
    {
        "title": "Flex Shrink",
        "description-short": "flex-shrink: 1",
        "description-long": "",
    },
    {
        "title": "Flex Basis",
        "description-short": "flex-basis: 3px | auto",
        "description-long": "",
    },
    {
        "title": "Align Self",
        "description-short": "align-self: auto | flex-start | flex-end | center | baseline | stretch",
        "description-long": "",
    },
]

// Template generators
function generateCard(data) : string {
    return (
        `<div class="cs-card">
            <div class="title">
                <p>${data['title']}</p>
            </div>
            <div class="description-short">
                <p>${data['description-short']}</p>
            </div>
        </div>`
    );
}
function generateList(data) : string {
    return;
}
function generateListBrief(data) : string {
    return;
}

$("#flexbox-cards").append($.map(flexbox_data, generateCard).join("\n"));