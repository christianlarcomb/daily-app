export default function ChildComponentCheck(props)
{
    /* If their is a child tag but the length is undefined, it means there is only 1 child */
    if(props.children !== undefined && props.children.length === undefined)
        return [props.children]

    /* If both checks are not undefined, set it as the children prop as it's already an array */
    else if (props.children !== undefined && props.children.length !== undefined)
        return props.children

    /* props.children must be undefined so return empty array */
    else return []
}