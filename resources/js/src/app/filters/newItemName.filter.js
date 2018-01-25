Vue.filter("newItemName", ({texts:{name1, name2, name3}, variation:{name}}, selectedName, considerVariationName) =>
{
    // Item name (based on setting below) = itemName
    // Variation name = variationName
    // Item name (based on setting below) + Variation name = itemNameVariationName
    if (considerVariationName === "variationName" && name && name.length)
    {
        return name;
    }

    let itemName = "";

    if (selectedName === 1 && item.name2 !== "")
    {
        itemName = name2;
    }
    else if (selectedName === 2 && item.name3 !== "")
    {
        itemName = name3;
    }
    else
    {
        itemName = name1;
    }

    if (considerVariationName === "itemNameVariationName" && name && name.length)
    {
        itemName = `${itemName} ${name}`;
    }

    return itemName;
});
