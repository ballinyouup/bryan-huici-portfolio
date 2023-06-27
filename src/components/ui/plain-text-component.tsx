"use client"
import { toPlainText } from "@portabletext/react";
export default function PlainTextComponent({value}: {value: any}){
    return toPlainText(value)
}