import type { CatalogItem } from "./types";

export type BoardUpsert = {
  boardId: string;
  clientName?: string;
  overallNotes?: string;
  timestamp?: string;
  selectedByCategory?: Record<string, string[]>;
  skipByCategory?: Record<string, boolean>;
  inspirationNotes?: Record<string, string>;
  url?: string;
};

export type ItemsBulk = {
  boardId: string;
  items: Array<{
    itemId: string;
    category?: string;
    priority?: "P1" | "P2" | "P3";
    note?: string;
  }>;
  skipByCategory?: string;
};

export async function upsertBoard(payload: BoardUpsert) {
  const r = await fetch("/api/ideation/boards/upsert", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) {
    const errorText = await r.text();
    console.error("Upsert board failed:", r.status, errorText);
    throw new Error(`Failed to upsert board: ${r.status} ${errorText}`);
  }
  return r.json();
}

export async function bulkItems(payload: ItemsBulk) {
  const r = await fetch("/api/ideation/boards/items/bulk", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) {
    const errorText = await r.text();
    console.error("Bulk items failed:", r.status, errorText);
    throw new Error(`Failed to save items: ${r.status} ${errorText}`);
  }
  return r.json();
}

export async function getBoard(boardId: string) {
  const r = await fetch(`/api/ideation/boards/${encodeURIComponent(boardId)}`);
  if (!r.ok) throw new Error("Failed to load board");
  return r.json();
}

export function buildItemsPayload(
  boardId: string,
  selectedByCategory: Record<string, string[]>,
  priorityByItem: Record<string, "P1" | "P2" | "P3">,
  allItems: CatalogItem[]
): ItemsBulk {
  const items: Array<{ itemId: string; category?: string; priority?: "P1" | "P2" | "P3" }> = [];
  
  // Include category information for each item
  Object.entries(selectedByCategory).forEach(([category, ids]) => {
    ids.forEach((id) => {
      items.push({
        itemId: id,
        category: category,
        priority: priorityByItem[id],
      });
    });
  });
  
  return { boardId, items };
}


