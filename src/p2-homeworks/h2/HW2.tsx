import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "middle" | "low";
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
 let result: Array<AffairType>
    if (filter === "all") {
        result = affairs
        return result
    }

    if (filter === "high") {
        result = affairs.filter((a:AffairType) => a.priority === "high")
        return result
    }
    if (filter === "middle") {
        result = affairs.filter((a:AffairType) => a.priority === "middle")
        return result
    }
    if (filter === "low") {
        result = affairs.filter((a:AffairType) => a.priority === "low")
        return result
    }else {
        return affairs
    }

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    let newAffairs = affairs.filter(a => a._id !== _id)
    return newAffairs;
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
