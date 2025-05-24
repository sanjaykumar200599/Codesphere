"use client"

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import SnippetLoadingSkeleton from "./_components/SnippetLoadingSkeleton";
import NavigationHeader from "@/components/NavigationHeader";

function SnippetDetailPage() {
    const snippetId= useParams().id;
    
    const snippet=useQuery(api.snippets.getSnippetById, { snippetId: snippetId as Id<"snippets">})

    if(snippet === undefined) return <SnippetLoadingSkeleton/>
    return <div className="min h-screen bg-[#0a0a0f]">
        <NavigationHeader/>
        
    </div>


}
export default SnippetDetailPage