import { LeftSidebar } from '@/components/workspace/LeftSidebar'
import { RightSidebar } from '@/components/workspace/RightSidebar'
import { VibeChatInterface } from '@/components/workspace/VibeChatInterface'

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSidebar />
      <VibeChatInterface />
      <RightSidebar />
    </div>
  )
}
