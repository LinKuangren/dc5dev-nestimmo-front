'use client';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button";
import FormPost from "./FormPost";
import { useState } from "react";

const DrawerCategory = () => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="default">
                    Create new category
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Ajouter une catégorie</DrawerTitle>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <DrawerDescription className="text-center">Renseignez l'ensemble des champs.</DrawerDescription>
                    <FormPost setOpen={setOpen} />
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerCategory;