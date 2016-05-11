// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file contains UTF8 strings that we want as  arrays.  To avoid
// different compilers, we use a script to convert the UTF8 strings into
// numeric literals (\x##).

const kAttentionIgnoredRe = "attention|attn";
const kRegionIgnoredRe =
    "province|region|other"
    "|provincia"  // es
    "|bairro|suburb";  // pt-BR, pt-PT
const kAddressNameIgnoredRe = "address.*nickname|address.*label";
const kCompanyRe =
    "company|business|organization|organisation"
    "|firma|firmenname"  // de-DE
    "|empresa"  // es
    "|societe|société"  // fr-FR
    "|ragione.?sociale"  // it-IT
    "|会社"  // ja-JP
    "|название.?компании"  // ru
    "|单位|公司"  // zh-CN
    "|회사|직장";  // ko-KR
const kAddressLine1Re =
    "^address$|address[_-]?line(one)?|address1|addr1|street"
    "|(?:shipping|billing)address$"
    "|strasse|straße|hausnummer|housenumber"  // de-DE
    "|house.?name"  // en-GB
    "|direccion|dirección"  // es
    "|adresse"  // fr-FR
    "|indirizzo"  // it-IT
    "|^住所$|住所1"  // ja-JP
    "|morada|endereço"  // pt-BR, pt-PT
    "|Адрес"  // ru
    "|地址"  // zh-CN
    "|^주소.?$|주소.?1";  // ko-KR
const kAddressLine1LabelRe =
    "address"
    "|adresse"  // fr-FR
    "|indirizzo"  // it-IT
    "|住所"  // ja-JP
    "|地址"  // zh-CN
    "|주소";  // ko-KR
const kAddressLine2Re =
    "address[_-]?line(2|two)|address2|addr2|street|suite|unit"
    "|adresszusatz|ergänzende.?angaben"  // de-DE
    "|direccion2|colonia|adicional"  // es
    "|addresssuppl|complementnom|appartement"  // fr-FR
    "|indirizzo2"  // it-IT
    "|住所2"  // ja-JP
    "|complemento|addrcomplement"  // pt-BR, pt-PT
    "|Улица"  // ru
    "|地址2"  // zh-CN
    "|주소.?2";  // ko-KR
const kAddressLine2LabelRe =
    "address|line"
    "|adresse"  // fr-FR
    "|indirizzo"  // it-IT
    "|地址"  // zh-CN
    "|주소";  // ko-KR
const kAddressLinesExtraRe =
    "address.*line[3-9]|address[3-9]|addr[3-9]|street|line[3-9]"
    "|municipio"  // es
    "|batiment|residence"  // fr-FR
    "|indirizzo[3-9]";  // it-IT
const kAddressLookupRe =
    "lookup";
const kCountryRe =
    "country|countries"
    "|país|pais"  // es
    "|国"  // ja-JP
    "|国家"  // zh-CN
    "|국가|나라";  // ko-KR
const kCountryLocationRe =
    "location";
const kZipCodeRe =
    "zip|postal|post.*code|pcode"
    "|pin.?code"  // en-IN
    "|postleitzahl"  // de-DE
    "|\\bcp\\b"  // es
    "|\\bcdp\\b"  // fr-FR
    "|\\bcap\\b"  // it-IT
    "|郵便番号"  // ja-JP
    "|codigo|codpos|\\bcep\\b"  // pt-BR, pt-PT
    "|Почтовый.?Индекс"  // ru
    "|邮政编码|邮编"  // zh-CN
    "|郵遞區號"  // zh-TW
    "|우편.?번호";  // ko-KR
const kZip4Re =
    "zip|^-$|post2"
    "|codpos2";  // pt-BR, pt-PT
const kCityRe =
    "city|town"
    "|\\bort\\b|stadt"  // de-DE
    "|suburb"  // en-AU
    "|ciudad|provincia|localidad|poblacion"  // es
    "|ville|commune"  // fr-FR
    "|localita"  // it-IT
    "|市区町村"  // ja-JP
    "|cidade"  // pt-BR, pt-PT
    "|Город"  // ru
    "|市"  // zh-CN
    "|分區"  // zh-TW
    "|^시[^도·・]|시[·・]?군[·・]?구";  // ko-KR
const kStateRe =
    "(?<!united )state|county|region|province"
    "|land"  // de-DE
    "|county|principality"  // en-UK
    "|都道府県"  // ja-JP
    "|estado|provincia"  // pt-BR, pt-PT
    "|область"  // ru
    "|省"  // zh-CN
    "|地區"  // zh-TW
    "|^시[·・]?도";  // ko-KR
/////////////////////////////////////////////////////////////////////////////
// credit_card_field.cc
/////////////////////////////////////////////////////////////////////////////
const kNameOnCardRe =
    "card.?(?:holder|owner)|name.*(\\b)?on(\\b)?.*card"
    "|(?:card|cc).?name|cc.?full.?name"
    "|karteninhaber"                   // de-DE
    "|nombre.*tarjeta"                 // es
    "|nom.*carte"                      // fr-FR
    "|nome.*cart"                      // it-IT
    "|名前"                            // ja-JP
    "|Имя.*карты"                      // ru
    "|信用卡开户名|开户名|持卡人姓名"  // zh-CN
    "|持卡人姓名";                     // zh-TW
const kNameOnCardContextualRe =
    "name";
const kCardNumberRe =
    "(add)?(?:card|cc|acct).?(?:number|#|no|num|field)"
    "|nummer"  // de-DE
    "|credito|numero|número"  // es
    "|numéro"  // fr-FR
    "|カード番号"  // ja-JP
    "|Номер.*карты"  // ru
    "|信用卡号|信用卡号码"  // zh-CN
    "|信用卡卡號"  // zh-TW
    "|카드";  // ko-KR
const kCardCvcRe =
    "verification|card.?identification|security.?code|card.?code"
    "|security.?number|card.?pin|c-v-v"
    "|(cvn|cvv|cvc|csc|cvd|cid|ccv)(field)?"
    "|\\bcid\\b";
// "Expiration date" is the most common label here, but some pages have
// "Expires", "exp. date" or "exp. month" and "exp. year".  We also look
// for the field names ccmonth and ccyear, which appear on at least 4 of
// our test pages.
// On at least one page (The China Shop2.html) we find only the labels
// "month" and "year".  So for now we match these words directly; we'll
// see if this turns out to be too general.
// Toolbar Bug 51451: indeed, simply matching "month" is too general for
//   https://rps.fidelity.com/ftgw/rps/RtlCust/CreatePIN/Init.
// Instead, we match only words beginning with "month".
const kExpirationMonthRe =
    "expir|exp.*mo|exp.*date|ccmonth|cardmonth|addmonth"
    "|gueltig|gültig|monat"  // de-DE
    "|fecha"  // es
    "|date.*exp"  // fr-FR
    "|scadenza"  // it-IT
    "|有効期限"  // ja-JP
    "|validade"  // pt-BR, pt-PT
    "|Срок действия карты"  // ru
    "|月";  // zh-CN
const kExpirationYearRe =
    "exp|^/|(add)?year"
    "|ablaufdatum|gueltig|gültig|jahr"  // de-DE
    "|fecha"  // es
    "|scadenza"  // it-IT
    "|有効期限"  // ja-JP
    "|validade"  // pt-BR, pt-PT
    "|Срок действия карты"  // ru
    "|年|有效期";  // zh-CN
// The "yy" portion of the regex is just looking for two adjacent y's.
const kExpirationDate2DigitYearRe =
    "(?:exp.*date.*|mm\\s*[-/]\\s*)[^y]yy([^y]|$)";
const kExpirationDate4DigitYearRe =
    "^mm\\s*[-/]\\syyyy$";
const kExpirationDateRe =
    "expir|exp.*date|^expfield$"
    "|gueltig|gültig"  // de-DE
    "|fecha"  // es
    "|date.*exp"  // fr-FR
    "|scadenza"  // it-IT
    "|有効期限"  // ja-JP
    "|validade"  // pt-BR, pt-PT
    "|Срок действия карты";  // ru
const kGiftCardRe =
    "gift.?card";
const kDebitGiftCardRe =
    "(?:visa|mastercard|discover|amex|american express).*gift.?card";
const kDebitCardRe =
    "debit.*card";
/////////////////////////////////////////////////////////////////////////////
// email_field.cc
/////////////////////////////////////////////////////////////////////////////
const kEmailRe =
    "e.?mail"
    "|courriel"  // fr
    "|メールアドレス"  // ja-JP
    "|Электронной.?Почты"  // ru
    "|邮件|邮箱"  // zh-CN
    "|電郵地址"  // zh-TW
    "|(?:이메일|전자.?우편|[Ee]-?mail)(.?주소)?";  // ko-KR
/////////////////////////////////////////////////////////////////////////////
// name_field.cc
/////////////////////////////////////////////////////////////////////////////
const kNameIgnoredRe =
    "user.?name|user.?id|nickname|maiden name|title|prefix|suffix"
    "|vollständiger.?name"  // de-DE
    "|用户名"  // zh-CN
    "|(?:사용자.?)?아이디|사용자.?ID";  // ko-KR
const kNameRe =
    "^name|full.?name|your.?name|customer.?name|bill.?name|ship.?name"
    "|name.*first.*last|firstandlastname"
    "|nombre.*y.*apellidos"  // es
    "|^nom"  // fr-FR
    "|お名前|氏名"  // ja-JP
    "|^nome"  // pt-BR, pt-PT
    "|姓名"  // zh-CN
    "|성명";  // ko-KR
const kNameSpecificRe =
    "^name"
    "|^nom"  // fr-FR
    "|^nome";  // pt-BR, pt-PT
const kFirstNameRe =
    "first.*name|initials|fname|first$|given.*name"
    "|vorname"  // de-DE
    "|nombre"  // es
    "|forename|prénom|prenom"  // fr-FR
    "|名"  // ja-JP
    "|nome"  // pt-BR, pt-PT
    "|Имя"  // ru
    "|이름";  // ko-KR
const kMiddleInitialRe = "middle.*initial|m\\.i\\.|mi$|\\bmi\\b";
const kMiddleNameRe =
    "middle.*name|mname|middle$"
    "|apellido.?materno|lastlastname";  // es
const kLastNameRe =
    "last.*name|lname|surname|last$|secondname|family.*name"
    "|nachname"  // de-DE
    "|apellido"  // es
    "|famille|^nom"  // fr-FR
    "|cognome"  // it-IT
    "|姓"  // ja-JP
    "|morada|apelidos|surename|sobrenome"  // pt-BR, pt-PT
    "|Фамилия"  // ru
    "|성[^명]?";  // ko-KR
/////////////////////////////////////////////////////////////////////////////
// phone_field.cc
/////////////////////////////////////////////////////////////////////////////
const kPhoneRe =
    "phone|mobile|contact.?number"
    "|telefonnummer"                                // de-DE
    "|telefono|teléfono"                            // es
    "|telfixe"                                      // fr-FR
    "|電話"                                         // ja-JP
    "|telefone|telemovel"                           // pt-BR, pt-PT
    "|телефон"                                      // ru
    "|电话"                                         // zh-CN
    "|(?:전화|핸드폰|휴대폰|휴대전화)(?:.?번호)?";  // ko-KR
const kCountryCodeRe =
    "country.*code|ccode|_cc";
const kAreaCodeNotextRe =
    "^\\($";
const kAreaCodeRe =
    "area.*code|acode|area"
    "|지역.?번호";  // ko-KR
const kPhonePrefixSeparatorRe =
    "^-$|^\\)$";
const kPhoneSuffixSeparatorRe =
    "^-$";
const kPhonePrefixRe =
    "prefix|exchange"
    "|preselection"  // fr-FR
    "|ddd";  // pt-BR, pt-PT
const kPhoneSuffixRe =
    "suffix";
const kPhoneExtensionRe =
    "\\bext|ext\\b|extension"
    "|ramal";  // pt-BR, pt-PT