import { create } from "zustand"

type AuthStore = {
	plant: string | null
	userName: string | null
	email: string | null
	lecturas: number[]
	wateringInfo: number | null
	lastTimeWatered: string | null
	setPlant: (plant: string) => void
	setUserName: (userName: string) => void
	setEmail: (email: string) => void
	setLecturas: (lecturas: number[]) => void
	setWateringInfo: (wateringInfo: number) => void
	setLastTimeWatered: (lastTimeWatered: string) => void
}

export const waterStore = create<AuthStore>((set) => ({
	plant: null,
	userName: null,
	email: null,
	lecturas: [],
	wateringInfo: null,
	lastTimeWatered: null,
	setPlant: (plant) => set({ plant }),
	setUserName: (userName) => set({ userName }),
	setEmail: (email) => set({ email }),
	setLecturas: (lecturas) => set({ lecturas }),
	setWateringInfo: (wateringInfo) => set({ wateringInfo }),
	setLastTimeWatered: (lastTimeWatered) => set({ lastTimeWatered }),
}))
