# Dashboard (mock) — design

**Ticket:** SCRUM-4 / branch `SCRUM-4-mock-Dashboard`
**Status:** mock UI only — no backend, no data fetching, no persistence.

## Cel

Statyczna podstrona `/dashboard` dla aplikacji shared-expense, spójna stylistycznie
z istniejącym widokiem `app/register/` (Tailwind v4, paleta zinc, dark mode,
karty `rounded-2xl bg-white shadow-sm`).

## Trasa i renderowanie

- Ścieżka: `/dashboard` (`app/dashboard/page.tsx`).
- Komponent serwerowy. Jedyny fragment kliencki to formularz zaproszenia
  (`invite-friends.tsx`, `"use client"`), który na submit robi `alert()` —
  tak jak `register-form.tsx`.

## Sekcje

1. **Nagłówek** — tytuł „Dashboard" + podtytuł powitalny.
2. **Karty podsumowania** — 3 kafelki w gridzie: Twoje saldo / Należne Tobie / Twój dług.
   Statyczne kwoty.
3. **Twoje grupy** — lista grup, do których należy użytkownik (nazwa, liczba członków,
   saldo w grupie). Pozycja jako `group-card.tsx`.
4. **Zaproś znajomych** — karta z polem e-mail + przycisk „Wyślij zaproszenie".
   Mock: submit → `alert()`.
5. **Ostatnie wydatki** — lista 4–5 pozycji (nazwa, kto płacił, kwota, data).
   Pozycja jako `expense-row.tsx`.

## Struktura plików (wzorzec z `register/`)

- `app/dashboard/page.tsx` — kompozycja sekcji.
- `app/dashboard/types.ts` — typy `Group`, `Expense`, `SummaryStat`.
- `app/dashboard/constants.ts` — mockowe dane (grupy, wydatki, podsumowanie).
- `app/dashboard/group-card.tsx` — karta grupy (serwerowy).
- `app/dashboard/expense-row.tsx` — wiersz wydatku (serwerowy).
- `app/dashboard/invite-friends.tsx` — formularz zaproszenia (`"use client"`).

## Poza zakresem (YAGNI)

Brak: API/fetch, stanu globalnego, walidacji poza prostym sprawdzeniem e-maila
w mocku, autoryzacji, realnych obliczeń sald.
