"use client"
import { PortableText } from '@portabletext/react'
import { portableComponents } from '../../../sanity/lib/portableComponents'
export default function PortableTextComponent({value, onMissingComponent}:{value: any, onMissingComponent: any}){
    return <PortableText
    value={value}
    components={portableComponents}
    onMissingComponent={onMissingComponent}
/>
}