import { atom, selector } from "recoil";

export const tabMetaData = [
  {
    value: "main",
    name: "메인",
    url: "/crawling/notice/univ",
    type: [
      { value: "ALL", name: "전체" },
      { value: "ACADEMIC", name: "학사" },
      { value: "SCHOLARSHIP", name: "장학" },
      { value: "LEARNING", name: "학습/상담" },
      { value: "EMPLOY", name: "취창업" },
    ],
  },
  {
    value: "event",
    name: "행사",
    url: "/crawling/notice/event",
    type: [
      { value: "ALL", name: "전체" },
      { value: "CAMPUS", name: "교내" },
      { value: "SUBURBS", name: "교외" },
    ],
  },
  {
    value: "major",
    name: "학부",
    url: "/crawling/notice/major",
    type: [],
  },
];

export const announceIndexStore = atom({
  key: "announceIndexStore",
  default: { tab: 0, select: 0 },
});

export const announceSelectStore = selector({
  key: "announceOptionStore",
  get: ({ get }) => {
    const { tab } = get(announceIndexStore);
    return tabMetaData[tab].type;
  },
});
