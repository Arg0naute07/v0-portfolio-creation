"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink, RefreshCw, Newspaper, Clock, AlertCircle } from "lucide-react"
import useSWR from "swr"

interface NewsItem {
  id: string
  title: string
  description: string
  url: string
  source: string
  publishedAt: string
  imageUrl?: string
}

interface NewsResponse {
  news: NewsItem[]
  lastUpdated: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return "A l'instant"
  if (diffInSeconds < 3600) return `Il y a ${Math.floor(diffInSeconds / 60)} min`
  if (diffInSeconds < 86400) return `Il y a ${Math.floor(diffInSeconds / 3600)}h`
  if (diffInSeconds < 604800) return `Il y a ${Math.floor(diffInSeconds / 86400)} jour(s)`
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })
}

export function NvidiaNewsFeed() {
  const { data, error, isLoading, mutate } = useSWR<NewsResponse>("/api/nvidia-news", fetcher, {
    refreshInterval: 300000, // Rafraichir toutes les 5 minutes
    revalidateOnFocus: true,
    dedupingInterval: 60000,
  })

  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await mutate()
    setIsRefreshing(false)
  }

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Newspaper className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">Actualites NVIDIA en direct</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Mise a jour automatique toutes les 5 minutes
            </p>
          </div>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing || isLoading}
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-accent/30 hover:border-accent hover:bg-accent/10 text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
          Actualiser
        </button>
      </div>

      {isLoading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4 border-border/50 animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </Card>
          ))}
        </div>
      )}

      {error && (
        <Card className="p-6 border-destructive/30 bg-destructive/5">
          <div className="flex items-center gap-3 text-destructive">
            <AlertCircle className="w-5 h-5" />
            <p>Impossible de charger les actualites. Veuillez reessayer.</p>
          </div>
        </Card>
      )}

      {data?.news && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.news.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                className="p-4 border-border/50 hover:border-accent/50 transition-all group hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-medium">
                      {item.source}
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatTimeAgo(item.publishedAt)}
                    </span>
                  </div>

                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground line-clamp-3 flex-grow mb-3">
                    {item.description}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:underline mt-auto"
                  >
                    Lire l&apos;article
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {data.lastUpdated && (
            <p className="text-xs text-muted-foreground text-center mt-4">
              Derniere mise a jour : {new Date(data.lastUpdated).toLocaleString("fr-FR")}
            </p>
          )}
        </>
      )}
    </div>
  )
}
