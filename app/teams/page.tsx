"use client";

import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeamsPage() {
  const router = useRouter();
  const teams = [
    {
      id: 1,
      name: "ЭНЕРЖИ МАЗААЛАЙ",
      gender: "male",
      logo: "/energyER.png",
      players: [
        { number: 20, name: "Т.Анар", position: "Чөлөөт Хамгаалагч" },
        { number: 5, name: "Т.Төрбат", position: "Хүчний довтлогч" },
        { number: 29, name: "Ч.Чинзориг", position: "Хүчний довтлогч" },
        { number: 21, name: "Б.Цочирбаяр", position: "Чөлөөт Хамгаалагч" },
        { number: 15, name: "С.Очир", position: "Голын хаагч" },
        { number: 81, name: "Т.Азжаргал", position: "Эсрэг довтлогч" },
        { number: 2, name: "Ж.Батбилэг", position: "Эсрэг довтлогч" },
        { number: 44, name: "У.Одгэрэл", position: "Холбогч" },
        { number: 4, name: "О.Будрэнцэн", position: "Хүчний довтлогч" },
        { number: 22, name: "Б.Мөнхжаргал", position: "Голын хаагч" },
        { number: 27, name: "Г.Хүслэн", position: "Холбогч" },
        { number: 3, name: "С.Галаа", position: "Голын хаагч" },
        { number: 12, name: "М.Мягмарсүрэн", position: "Эсрэг довтлогч" },
        { number: 19, name: "М.Оджаргал", position: "Эсрэг довтлогч" },
        { number: 16, name: "Н.Өлзийхишиг", position: "Голын хаагч" },
        { number: 8, name: "Г.Ууганбаяр", position: "Холбогч" },
        { number: 23, name: "D.Stalone", position: "Голын хаагч" },
        { number: 99, name: "D.Babkov", position: "Хүчний довтлогч" },
      ],
    },
    {
      id: 2,
      name: "НАТУР БАКС",
      gender: "male",
      logo: "/naturebucksER.png",
      players: [
        { number: 18, name: "М.Мөнхжаргал", position: "Хүчний довтлогч" },
        { number: 3, name: "С.Мөнхжин", position: "Холбогч" },
        { number: 7, name: "Х.Төгөлдөрхараа", position: "Голын хаагч" },
        { number: 10, name: "Э.Шинэтөгс", position: "Голын хаагч" },
        { number: 4, name: "Б.Түвшин-Эрдэнэ", position: "Хүчний довтлогч" },
        { number: 1, name: "С.Түвшинбаяр", position: "Хүчний довтлогч" },
        { number: 21, name: "Б.Бат-Эрдэнэ", position: "Голын хаагч" },
        { number: 11, name: "А.Цолмон", position: "Голын хаагч" },
        { number: 12, name: "Б.Эрдэнэдалай", position: "Хүчний довтлогч" },
        { number: 8, name: "У.Итгэл", position: "Голын хаагч" },
        { number: 24, name: "Б.Эрхэм-Итгэл", position: "Эсрэг довтлогч" },
        { number: 6, name: "Б.Тэмүүлэн", position: "Хүчний довтлогч" },
        { number: 20, name: "Ц.Бат-Оргил", position: "Голын хаагч" },
        { number: 15, name: "С.Хүлэг", position: "Хүчний довтлогч" },
        { number: 14, name: "Э.Мөнхсүлд", position: "Голын хаагч" },
        { number: 17, name: "Э.Төгөлдөр", position: "Голын хаагч" },
        { number: 9, name: "Х.Тамир", position: "Чөлөөт Хамгаалагч" },
        { number: 22, name: "Э.Пүрэв-Очир", position: "Холбогч" },
        { number: 25, name: "Д.Тэргэл", position: "Голын хаагч" },
        { number: 5, name: "Г.Ариунболд", position: "Чөлөөт Хамгаалагч" },
      ],
    },
    {
      id: 3,
      name: "МЕГА СТАРС",
      gender: "male",
      logo: "/megastarsER.png",
      players: [
        { number: 7, name: "Мөнх-Эрдэнэ", position: "Холбогч" },
        { number: 17, name: "Б.Баяр-Эрдэнэ", position: "Довтлогч" },
        { number: 11, name: "Д.Билгүүн", position: "Довтлогч" },
        { number: 22, name: "Э.Анхтөр", position: "Холбогч" },
        { number: 21, name: "А.Баасандорж", position: "Довтлогч" },
        { number: 2, name: "О.Төгөлдөр", position: "Довтлогч" },
        { number: 8, name: "Б.Тэлмэн", position: "Довтлогч" },
        { number: 9, name: "С.Дөлгөөн", position: "Довтлогч" },
        { number: 18, name: "А.Төгөлдөр", position: "Довтлогч" },
        { number: 1, name: "М.Хурхарцаг", position: "Холбогч" },
        { number: 30, name: "Б.Мөнхжавхлан", position: "Хамгаалагч" },
        { number: 20, name: "Х.Селийм", position: "Довтлогч" },
        { number: 33, name: "М.Төгөлдөр", position: "Довтлогч" },
        { number: 6, name: "Ү.Өнөболд", position: "Хамгаалагч" },
        { number: 66, name: "Э.Сатжол", position: "Довтлогч" },
        { number: 13, name: "Г.Мөнхжаргал", position: "Довтлогч" },
        { number: 27, name: "Н.Тэмүүжин", position: "Довтлогч" },
      ],
    },
    {
      id: 4,
      name: "ӨМНӨГОВЬ ЁЛУУД",
      gender: "male",
      logo: "/yluudER.png",
      players: [
        { number: 9, name: "Б.Баяржавхлан", position: "Довтлогч" },
        { number: 17, name: "Т.Ариунбат", position: "Довтлогч" },
        { number: 11, name: "Б.Хишигдорж", position: "Довтлогч" },
        { number: 21, name: "Э.Даваажаргал", position: "Хамгаалагч" },
        { number: 8, name: "А.Оргил-Эрдэнэ", position: "Довтлогч" },
        { number: 3, name: "С.Бат-Итгэл", position: "Довтлогч" },
        { number: 5, name: "Э.Болор-Эрдэнэ", position: "Холбогч" },
        { number: 24, name: "Б.Од", position: "Хамгаалагч" },
        { number: 1, name: "Н.Ганхүслэн", position: "Холбогч" },
        { number: 19, name: "Б.Төгсбилэг", position: "Довтлогч" },
        { number: 24, name: "Өсөхжаргал", position: "Довтлогч" },
        { number: 13, name: "Ц.Батсайхан", position: "Довтлогч" },
        { number: 6, name: "С.Пүрэв-Очир", position: "Довтлогч" },
        { number: 14, name: "Н.Доржсамбуу", position: "Довтлогч" },
        { number: 12, name: "Д.Шивонцээ", position: "Хамгаалагч" },
        { number: 4, name: "Б.Дэлгэрмөрөн", position: "Холбогч" },
        { number: 2, name: "А.Мөнгөнбат", position: "Хаалч" },
        { number: 99, name: "Б.Энхбат", position: "Довтлогч" },
        { number: 18, name: "L.Arrechea", position: "Довтлогч" },
        { number: 88, name: "Aziret", position: "Довтлогч" },
      ],
    },
    {
      id: 5,
      name: "БАЯНГОЛ АЛТАЙН БАРС ХИЛЧИН",
      gender: "male",
      logo: "/altainbarsER.png",
      players: [
        { number: 2, name: "Ц.Мөнх-Оргил", position: "Хүчний довтлогч" },
        { number: 13, name: "Н.Есөн-Эрдэнэ", position: "Эсрэг довтлогч" },
        { number: 19, name: "Б.Одмөнх", position: "Холбогч" },
        { number: 1, name: "Б.Мөнх-Эрдэнэ", position: "Хүчний довтлогч" },
        { number: 11, name: "Б.Мөнхжаргал", position: "Эсрэг довтлогч" },
        { number: 12, name: "А.Тэргэл", position: "Голын хаагч" },
        { number: 22, name: "Э.Хүслэн", position: "Чөлөөт Хамгаалагч" },
        { number: 3, name: "Б.Оргил", position: "Голын хаагч" },
        { number: 8, name: "А.Бат-Эрдэнэ", position: "Эсрэг довтлогч" },
        { number: 24, name: "Б.Тамир", position: "Хүчний довтлогч" },
        { number: 6, name: "Б.Эрмүүнтөгөлдөр", position: "Холбогч" },
        { number: 16, name: "Б.Анарсайхан", position: "Эсрэг довтлогч" },
        { number: 4, name: "А.Сономцэцэг", position: "Хүчний довтлогч" },
        { number: 15, name: "Ч.Ганжигүүр", position: "Голын хаагч" },
        { number: 10, name: "Ц.Чинхүслэн", position: "Хүчний довтлогч" },
        { number: 17, name: "Г.Пүрэвдалай", position: "Чөлөөт Хамгаалагч" },
        { number: 14, name: "Г.Мөнхзориг", position: "Голын хаагч" },
        { number: 7, name: "С.Ихбаяр", position: "Голын хаагч" },
        { number: 9, name: "А.Мөнхбаяр", position: "Хүчний довтлогч" },
        { number: 5, name: "А.Түвшинтөгөлдөр", position: "Хүчний довтлогч" },
      ],
    },
    {
      id: 6,
      name: "АРАНЗАЛ СНТ",
      gender: "male",
      logo: "/aranzalER.png",
      players: [
        { number: 99, name: "Д.Одбаяр", position: "Довтлогч" },
        { number: 1, name: "Б.Өсөхбаяр", position: "Холбогч" },
        { number: 2, name: "Б.Төрболд", position: "Холбогч" },
        { number: 3, name: "О.Эрхэтбаатар", position: "Хаагч" },
        { number: 5, name: "М.Мөнх-Эрдэнэ", position: "Довтлогч" },
        { number: 6, name: "Б.Ням-Очир", position: "Хаагч" },
        { number: 7, name: "Б.Чинбат", position: "Холбогч" },
        { number: 8, name: "О.Мөнхбаатар", position: "Довтлогч" },
        { number: 9, name: "Б.Улсболд", position: "Довтлогч" },
        { number: 10, name: "Б.Баянцагаан", position: "Хамгаалагч" },
        { number: 11, name: "Б.Цэнгэлдалай", position: "Довтлогч" },
        { number: 12, name: "М.Будбаясгалан", position: "Хамгаалагч" },
        { number: 13, name: "Э.Энхамгалан", position: "Хаагч" },
        { number: 14, name: "Б.Гандаваа", position: "Довтлогч" },
        { number: 15, name: "Б.Болд", position: "Довтлогч" },
        { number: 17, name: "Н.Өсөхбаяр", position: "Довтлогч" },
        { number: 18, name: "Т.Ууган-Эрдэнэ", position: "Хаагч" },
        { number: 19, name: "Н.Тэнгис", position: "Хаагч" },
        { number: 20, name: "Г.Өнөбаяр", position: "Хаагч" },
      ],
    },
    {
      id: 7,
      name: "ЗАВХАН МИГ WOLVES",
      gender: "male",
      logo: "/tuvzaamarER.png",
      players: [
        { number: 19, name: "Б.Ганбат", position: "Эсрэг довтлогч" },
        { number: 11, name: "О.Бат-Ирээдүй", position: "Чөлөөт Хамгаалагч" },
        { number: 8, name: "Б.Анхбаяр", position: "Холбогч" },
        { number: 3, name: "М.Эрхэмбаяр", position: "Голын хаагч" },
        { number: 14, name: "Э.Дэлгэрбат", position: "Хүчний довтлогч" },
        { number: 5, name: "Л.Бадамцогт", position: "Эсрэг довтлогч" },
        { number: 22, name: "С.Нямдэмбэрэл", position: "Голын хаагч" },
        { number: 77, name: "Б.Баяр-Эрдэнэ", position: "Голын хаагч" },
        { number: 13, name: "Э.Төгөлдөр-Од", position: "Голын хаагч" },
        { number: 18, name: "О.Эрдэнэдалай", position: "Холбогч" },
        { number: 7, name: "У.Алтаншагай", position: "Хүчний довтлогч" },
        { number: 12, name: "М.Мягмарсүрэн", position: "Чөлөөт Хамгаалагч" },
        { number: 21, name: "Б.Бямбадорж", position: "Эсрэг довтлогч" },
        { number: 9, name: "Т.Батмэнд", position: "Эсрэг довтлогч" },
        { number: 17, name: "А.Мягмар-Эрдэнэ", position: "Хүчний довтлогч" },
        { number: 1, name: "Б.Бадамсамбуу", position: "Хүчний довтлогч" },
        { number: 2, name: "М.Бат-Эрдэнэ", position: "Хүчний довтлогч" },
        { number: 4, name: "Л.Нямрагчаа", position: "Хүчний довтлогч" },
      ],
    },
    {
      id: 8,
      name: "ДОРНОГОВЬ ВХ",
      gender: "male",
      logo: "/dornogoviER.png",
      players: [
        { number: 10, name: "Б.Бат-Ууган", position: "Довтлогч" },
        { number: 2, name: "Б.Төгөлдөр", position: "Довтлогч" },
        { number: 4, name: "М.Мөнхтогтох", position: "Довтлогч" },
        { number: 1, name: "Г.Хосбаяр", position: "Довтлогч" },
        { number: 5, name: "Э.Пүрэвбат", position: "Довтлогч" },
        { number: 7, name: "Х.Гомбодорж", position: "Довтлогч" },
        { number: 12, name: "Т.Энэрэл", position: "Довтлогч" },
        { number: 23, name: "М.Бат-Эрдэнэ", position: "Довтлогч" },
        { number: 11, name: "Б.Даваабаатар", position: "Холбогч" },
        { number: 6, name: "Б.Бумбаяр", position: "Хамгаалагч" },
        { number: 8, name: "Д.Зундуйжамц", position: "Довтлогч" },
        { number: 16, name: "Ц.Содбаатар", position: "Довтлогч" },
        { number: 15, name: "Б.Үйлстөгөлдөр", position: "Довтлогч" },
        { number: 24, name: "Н.Мөнхцогт", position: "Довтлогч" },
        { number: 14, name: "Д.Ууганбаатар", position: "Довтлогч" },
        { number: 25, name: "Ундрахбаяр", position: "Довтлогч" },
        { number: 13, name: "М.Баяржавхлан", position: "Холбогч" },
        { number: 19, name: "М.Нармандах", position: "Холбогч" },
        { number: 9, name: "С.Төмөрхуяг", position: "Холбогч" },
        { number: 17, name: "Г.Ган-Эрдэнэ", position: "Довтлогч" },
      ],
    },
    {
      id: 9,
      name: "ТӨВ ЗААМАР MIG WOLVES",
      gender: "male",
      logo: "/zavhanER.png",
      players: [
        { number: 1, name: "М.Чиндорж", position: "Эсрэг довтлогч" },
        { number: 13, name: "О.Саруул-Ирээдүй", position: "Хүчний довтлогч" },
        { number: 12, name: "Э.Баяртөгс", position: "Холбогч" },
        { number: 11, name: "М.Энхболд", position: "Эсрэг довтлогч" },
        { number: 9, name: "Д.Отгонбаатар", position: "Чөлөөт Хамгаалагч" },
        { number: 3, name: "О.Тэмүүлэн", position: "Чөлөөт Хамгаалагч" },
        { number: 14, name: "Б.Азбаяр", position: "Хүчний довтлогч" },
        { number: 8, name: "М.Мөнхтөгөлдөр", position: "Голын хаагч" },
        { number: 5, name: "Э.Цэгмид", position: "Голын хаагч" },
        { number: 2, name: "М.Сүхбат", position: "Голын хаагч" },
        { number: 15, name: "Ж.Мөнх-Эрдэнэ", position: "Голын хаагч" },
        { number: 4, name: "Д.Төрмөнх", position: "Холбогч" },
        { number: 6, name: "У.Билгүүн", position: "Хүчний довтлогч" },
        { number: 7, name: "О.Мягмардорж", position: "Хүчний довтлогч" },
        { number: 10, name: "Н.Амарбаясгалан", position: "Хүчний довтлогч" },
        { number: 16, name: "Б.Мөнхцацрал", position: "Холбогч" },
        { number: 17, name: "А.Оюунбаяр", position: "Хүчний довтлогч" },
      ],
    },
    {
      id: 10,
      name: "ДАРХАН МОГУЛС",
      gender: "male",
      logo: "/mogulsER.png",
      players: [
        { number: 11, name: "Г.Баттүшиг", position: "Холбогч" },
        { number: 6, name: "Б.Маргад-Эрдэнэ", position: "Довтлогч" },
        { number: 0, name: "Н.Хэрлэн", position: "Довтлогч" },
        { number: 16, name: "С.Цэрэндондов", position: "Довтлогч" },
        { number: 24, name: "Н.Дөлбаяр", position: "Довтлогч" },
        { number: 4, name: "Ч.Отгонбаяр", position: "Холбогч" },
        { number: 22, name: "М.Энгүүн-Эрдэнэ", position: "Хамгаалагч" },
        { number: 2, name: "Ч.Санчир", position: "Довтлогч" },
        { number: 7, name: "М.Азбаяр", position: "Довтлогч" },
        { number: 27, name: "М.Данзан", position: "Хамгаалагч" },
        { number: 28, name: "Б.Баатархүү", position: "Довтлогч" },
        { number: 13, name: "Б.Дашдаваа", position: "Холбогч" },
        { number: 31, name: "Ж.Дөлгөөн", position: "Довтлогч" },
        { number: 21, name: "Л.Даваасүрэн", position: "Довтлогч" },
        { number: 30, name: "Ц.Алтангэрэл", position: "Холбогч" },
      ],
    },
    {
      id: 11,
      name: "MMB SPORT ACADEMY",
      gender: "female",
      logo: "/mmbEM1.png",
      players: [
        { number: 5, name: "Л.Баянхангай", position: "L" },
        { number: 15, name: "Д.Анирцэцэг", position: "L" },
        { number: 1, name: "Б.Буманхүслэн", position: "L" },
        { number: 13, name: "Н.Шинэзаяа", position: "S" },
        { number: 25, name: "Т.Гандиръяа", position: "OH" },
        { number: 7, name: "Б.Маралмаа", position: "OH" },
        { number: 6, name: "Б.Гантуяа", position: "OH" },
        { number: 4, name: "Б.Баярмаа", position: "OH" },
        { number: 16, name: "Г.Тогтасин", position: "OH" },
        { number: 17, name: "Т.Мичидмаа", position: "OH" },
        { number: 14, name: "О.Солонго", position: "S" },
        { number: 12, name: "Г.Ганцэцэг", position: "MB" },
        { number: 19, name: "Э.Аззаяа", position: "MB" },
        { number: 3, name: "Ц.Оюунтуяа", position: "OP" },
        { number: 20, name: "Б.Үүлэн", position: "MB" },
        { number: 10, name: "М.Маргад-Эрдэнэ", position: "MB" },
        { number: 9, name: "Э.Бурмаа", position: "OH" },
        { number: 8, name: "Б.Чинцэлмэг", position: "OH" },
        { number: 2, name: "Б.Мөнх-Ундрал", position: "S" },
      ],
    },
    {
      id: 12,
      name: "DOCTORS",
      gender: "female",
      logo: "/doctorsEM1.png",
      players: [
        { number: 15, name: "Г.Мөнхтуул", position: "Чөлөөт Хамгаалагч" },
        { number: 18, name: "Б.Сарнай", position: "Чөлөөт Хамгаалагч" },
        { number: 7, name: "Э.Батцэцэг", position: "Холбогч" },
        { number: 2, name: "Б.Нандин-Эрдэнэ", position: "Холбогч" },
        { number: 99, name: "М.Оюунтуяа", position: "Холбогч" },
        { number: 6, name: "Б.Эрдэнэтуяа", position: "Голын хаагч" },
        { number: 17, name: "М.Номин", position: "Голын хаагч" },
        { number: 29, name: "S.Mesalina", position: "Голын хаагч" },
        { number: 14, name: "О.Сарангоо", position: "Голын хаагч" },
        { number: 3, name: "Б.Ирмүүнзаяа", position: "Голын хаагч" },
        { number: 22, name: "С.Тэмүүлэн", position: "Голын хаагч" },
        { number: 5, name: "Г.Болор-Эрдэнэ", position: "Хүчний довтлогч" },
        { number: 9, name: "О.Долгион", position: "Хүчний довтлогч" },
        { number: 11, name: "Д.Гансувд", position: "Хүчний довтлогч" },
        { number: 1, name: "Б.Чанцалсүрэн", position: "Хүчний довтлогч" },
        { number: 8, name: "Б.Нинжбадгар", position: "Хүчний довтлогч" },
        { number: 4, name: "Б.Өлзийжаргал", position: "Хүчний довтлогч" },
        { number: 19, name: "Б.Энхлэн", position: "Хүчний довтлогч" },
        { number: 24, name: "L.Junsil", position: "Хүчний довтлогч" },
        { number: 13, name: "Z.Veronika", position: "Хүчний довтлогч" },
      ],
    },
    {
      id: 13,
      name: "GOLDEN BALL LYNX",
      gender: "female",
      logo: "/lynxEM1.png",
      players: [
        { number: 10, name: "Г.Золзаяа", position: "Чөлөөт хамгаалагч" },
        { number: 1, name: "Б.Сувданцэцэг", position: "Холбогч" },
        { number: 2, name: "А.Амарбаясгалан", position: "Довтлогч" },
        { number: 4, name: "С.Пүрэвжаргал", position: "Довтлогч" },
        { number: 5, name: "А.Наранчимэг", position: "Довтлогч" },
        { number: 3, name: "Э.Халиун", position: "Довтлогч" },
        { number: 13, name: "О.Анударь", position: "Довтлогч" },
        { number: 16, name: "Ч.Сүхжин", position: "Довтлогч" },
        { number: 6, name: "Г.Долгоржав", position: "Довтлогч" },
        { number: 9, name: "Д.Энхжин", position: "Довтлогч" },
        { number: 17, name: "Э.Энхжин", position: "Довтлогч" },
        { number: 11, name: "Т.Лиллиан", position: "Довтлогч" },
        { number: 20, name: "Т.Болорцэцэг", position: "Довтлогч" },
        { number: 14, name: "Г.Уранзаяа", position: "Холбогч" },
        { number: 19, name: "Г.Элбэрэл", position: "Довтлогч" },
        { number: 8, name: "Г.Цэрэнням", position: "Довтлогч" },
        { number: 12, name: "Б.Алтанцэцэг", position: "Довтлогч" },
      ],
    },
    {
      id: 14,
      name: "СЭЛЭНГЭ SBM",
      gender: "female",
      logo: "/sbmEM1.png",
      players: [
        { number: 11, name: "Э.Хонгорзул", position: "Хүчний довтлогч" },
        { number: 22, name: "К.Еркежан", position: "Голын хаагч" },
        { number: 9, name: "С.Уран-Эрдэнэ", position: "Холбогч" },
        { number: 6, name: "Б.Болор-Эрдэнэ", position: "Голын хаагч" },
        { number: 12, name: "Б.Бүтэд", position: "Хүчний довтлогч" },
        { number: 10, name: "Б.Энхжин", position: "Хүчний довтлогч" },
        { number: 23, name: "Б.Өнөржаргал", position: "Голын хаагч" },
        { number: 17, name: "Ч.Бөртэ-Үжин", position: "Эсрэг довтлогч" },
        { number: 5, name: "Г.Буянхишиг", position: "Голын хаагч" },
        { number: 14, name: "Б.Цэлмэг", position: "Хүчний довтлогч" },
        { number: 7, name: "Д.Гантунгалаг", position: "Эсрэг довтлогч" },
        { number: 15, name: "Б.Баярчимэг", position: "Чөлөөт Хамгаалагч" },
        { number: 3, name: "П.Тэгшжаргал", position: "Эсрэг довтлогч" },
        { number: 8, name: "Д.Наранцацрал", position: "Холбогч" },
      ],
    },
    {
      id: 15,
      name: "PRIME ILCH DYNASTY",
      gender: "female",
      logo: "/dynastyEM1.png",
      players: [
        { number: 3, name: "Б.Дэлгэр-Уянга", position: "Голын хаагч" },
        { number: 5, name: "Э.Бадамцэцэг", position: "Эсрэг довтлогч" },
        { number: 16, name: "Г.Бэрцэцэг", position: "Чөлөөт Хамгаалагч" },
        { number: 1, name: "Д.Арвин-Эрдэнэ", position: "Хүчний довтлогч" },
        { number: 17, name: "Б.Бадамханд", position: "Эсрэг довтлогч" },
        { number: 13, name: "Г.Анужин", position: "Чөлөөт Хамгаалагч" },
        { number: 12, name: "Б.Золжаргал", position: "Эсрэг довтлогч" },
        { number: 2, name: "М.Тэмүүлэн", position: "Холбогч" },
        { number: 21, name: "Б.Мөнх-Учрал", position: "Хүчний довтлогч" },
        { number: 9, name: "Б.Шинэзаяа", position: "Хүчний довтлогч" },
        { number: 15, name: "Д.Баянсүрэн", position: "Хүчний довтлогч" },
        { number: 8, name: "Б.Эрдэнэсувд", position: "Холбогч" },
        { number: 19, name: "Э.Аззаяа", position: "Холбогч" },
        { number: 7, name: "У.Хүслэн", position: "Хүчний довтлогч" },
        { number: 14, name: "Э.Пүрэвжаргал", position: "Голын хаагч" },
        { number: 18, name: "Н.Мөнгөнсарнай", position: "Голын хаагч" },
        { number: 10, name: "Б.Ууганчимэг", position: "Хүчний довтлогч" },
        { number: 6, name: "Б.Сувд", position: "Голын хаагч" },
        { number: 11, name: "М.Марал", position: "Хүчний довтлогч" },
        { number: 4, name: "Н.Балжинням", position: "Голын хаагч" },
      ],
    },
    {
      id: 16,
      name: "MUBSI 3X3 ACADEMY",
      gender: "female",
      logo: "/mubsiEM1.png",
      players: [
        { number: 18, name: "М.Буян-Арвижих", position: "Довтлогч" },
        { number: 11, name: "М.Энхжин", position: "Довтлогч" },
        { number: 1, name: "Н.Үүлэнцэцэг", position: "Довтлогч" },
        { number: 14, name: "Н.Энхрэлмаа", position: "Холбогч" },
        { number: 12, name: "Б.Нандин-Эрдэнэ", position: "Довтлогч" },
        { number: 16, name: "Э.Солонго", position: "Довтлогч" },
        { number: 20, name: "Б.Гүнномин", position: "Холбогч" },
        { number: 15, name: "Б.Одончимэг", position: "Хамгаалагч" },
        { number: 24, name: "Г.Хулан", position: "Хамгаалагч" },
        { number: 8, name: "Г.Энхсайхан", position: "Довтлогч" },
        { number: 6, name: "Д.Цэндмаа", position: "Довтлогч" },
        { number: 2, name: "А.Пүрэвсүрэн", position: "Довтлогч" },
        { number: 3, name: "Л.Нарантуяа", position: "Довтлогч" },
        { number: 17, name: "Е.Хосчимэг", position: "Довтлогч" },
        { number: 5, name: "Ж.Хулан", position: "Довтлогч" },
        { number: 19, name: "Д.Намуунзаяа", position: "Довтлогч" },
        { number: 4, name: "Ш.Нандин-Эрдэнэ", position: "Довтлогч" },
      ],
    },
    {
      id: 17,
      name: "ХАНТАЙШИР",
      gender: "female",
      logo: "/hantaishirEM1.png",
      players: [
        { number: 4, name: "Б.Анунгоо", position: "Хүчний довтлогч" },
        { number: 1, name: "Н.Мандушир", position: "Чөлөөт Хамгаалагч" },
        { number: 2, name: "Э.Алтанзул", position: "Холбогч" },
        { number: 5, name: "Б.Цэлмэг", position: "Хүчний довтлогч" },
        { number: 6, name: "Ч.Хулангоо", position: "Голын хаагч" },
        { number: 7, name: "М.Анужин", position: "Голын хаагч" },
        { number: 8, name: "Ө.Гэгээнсанаа", position: "Хүчний довтлогч" },
        { number: 9, name: "С.Ариунжаргал", position: "Чөлөөт Хамгаалагч" },
        { number: 10, name: "А.Номин", position: "Голын хаагч" },
        { number: 11, name: "Б.Энхжин", position: "Чөлөөт Хамгаалагч" },
        { number: 13, name: "Ш.Золтуяа", position: "Хүчний довтлогч" },
        { number: 14, name: "Г.Мягмарханд", position: "Хүчний довтлогч" },
        { number: 15, name: "С.Бадмаараг", position: "Голын хаагч" },
        { number: 17, name: "М.Эгшиглэн", position: "Хүчний довтлогч" },
        { number: 24, name: "Э.Энхдөлгөөн", position: "Холбогч" },
      ],
    },
    {
      id: 18,
      name: "ХИЛЧИН TG",
      gender: "female",
      logo: "/hilchinEM1.png",
      players: [
        { number: 10, name: "Э.Энгүүн", position: "Чөлөөт Хамгаалагч" },
        { number: 1, name: "Б.Энэрэл", position: "Хүчний довтлогч" },
        { number: 14, name: "А.Энхжин", position: "Эсрэг довтлогч" },
        { number: 17, name: "Ц.Тэргэл", position: "Хүчний довтлогч" },
        { number: 3, name: "Б.Мишээл", position: "Хүчний довтлогч" },
        { number: 18, name: "Ц.Анужин", position: "Хүчний довтлогч" },
        { number: 8, name: "П.Энхжин", position: "Чөлөөт Хамгаалагч" },
        { number: 9, name: "Б.Мишээл", position: "Голын хаагч" },
        { number: 12, name: "А.Дөлгөөн-Онон", position: "Голын хаагч" },
        { number: 2, name: "С.Нинжингоо", position: "Холбогч" },
        { number: 5, name: "Г.Ганцацрал", position: "Холбогч" },
        { number: 11, name: "Э.Энхцэцэг", position: "Холбогч" },
        { number: 6, name: "Н.Майцэцэг", position: "Голын хаагч" },
        { number: 29, name: "Ц.Анужин", position: "Голын хаагч" },
        { number: 7, name: "М.Сайнжаргал", position: "Голын хаагч" },
        { number: 4, name: "С.Сарангуа", position: "Холбогч" },
        { number: 22, name: "Г.Анужин", position: "Голын хаагч" },
        { number: 15, name: "Г.Маяа Хайдар", position: "Эсрэг довтлогч" },
        { number: 19, name: "Б.Азбаяр", position: "Эсрэг довтлогч" },
        { number: 16, name: "Д.Энхзолбоо", position: "Эсрэг довтлогч" },
      ],
    },
    {
      id: 19,
      name: "АРАНЗАЛ СНТ",
      gender: "female",
      logo: "/aranzalER.png",
      players: [
        { number: 28, name: "Т.Ундармаа", position: "Хүчний довтлогч" },
        { number: 1, name: "Б.Энх-Уянга", position: "Голын хаагч" },
        { number: 2, name: "П.Сурмаасүрэн", position: "Хүчний довтлогч" },
        { number: 3, name: "Б.Булган", position: "Чөлөөт Хамгаалагч" },
        { number: 4, name: "Т.Үржинханд", position: "Хүчний довтлогч" },
        { number: 5, name: "Б.Ариун-Эрдэнэ", position: "Эсрэг довтлогч" },
        { number: 6, name: "Т.Одонцэцэг", position: "Хүчний довтлогч" },
        { number: 7, name: "Т.Баясгалан", position: "Холбогч" },
        { number: 8, name: "М.Амирлан", position: "Чөлөөт Хамгаалагч" },
        { number: 9, name: "Д.Бямбасүрэн", position: "Чөлөөт Хамгаалагч" },
        { number: 10, name: "Г.Номин", position: "Хүчний довтлогч" },
        { number: 11, name: "Б.Энххүслэн", position: "Эсрэг довтлогч" },
        { number: 12, name: "О.Цэрмаабуд", position: "Голын хаагч" },
        { number: 13, name: "Б.Нинжин", position: "Холбогч" },
        { number: 14, name: "Б.Номин-Эрдэнэ", position: "Голын хаагч" },
        { number: 15, name: "У.Энхжин", position: "Эсрэг довтлогч" },
        { number: 16, name: "А.Баярсайхан", position: "Голын хаагч" },
        { number: 18, name: "Э.Ариунтөгс", position: "Хүчний довтлогч" },
        { number: 55, name: "Б.Амгалан", position: "Эсрэг довтлогч" },
        { number: 99, name: "М.Сувд-Эрдэнэ", position: "Эсрэг довтлогч" },
      ],
    },
  ];

  const [openTeamId, setOpenTeamId] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold mb-6 m-0 text-black">Багууд</div>
        <button
          onClick={() => router.back()}
          className="flex items-center text-[15px] font-medium text-black border rounded-md p-1 mb-6"
        >
          <ArrowBigLeft className="text-black" /> Буцах
        </button>
      </div>

      <div className="space-y-4">
        {teams.map((team) => (
          <div
            key={team.id}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >
            {/* Logo + Name */}
            <div className="grid grid-cols-[80px_1fr_70px] items-center gap-4">
              <Image
                src={team.logo}
                alt={team.name}
                width={80}
                height={80}
                className="object-contain"
              />

              <h2 className="font-semibold text-gray-800  text-lg flex items-center gap-2">
                {team.name}
              </h2>
              <span
                className={`text-xs px-2 py-0.5 rounded-full
      ${
        team.gender === "male"
          ? "bg-blue-100 text-blue-700"
          : "bg-pink-100 text-pink-700"
      }
    `}
              >
                {team.gender === "male" ? "Эрэгтэй" : "Эмэгтэй"}
              </span>
            </div>

            {/* Button */}
            <button
              onClick={() =>
                setOpenTeamId(openTeamId === team.id ? null : team.id)
              }
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              Тамирчдын мэдээлэл
            </button>

            {/* Players */}
            {openTeamId === team.id && (
              <div className="mt-4 border-t pt-3 space-y-2">
                {team.players.map((p) => (
                  <div
                    key={p.number}
                    className="flex justify-between text-sm bg-gray-50 p-2 rounded-md"
                  >
                    <span className="font-medium text-gray-800">
                      #{p.number}
                    </span>
                    <span className="text-black">{p.name}</span>
                    <span className="text-gray-600">{p.position}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
