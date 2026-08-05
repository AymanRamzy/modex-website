# ModEX FM Bootcamp Certificate Examination Portal

**Target domain:** `FMbootcamp.financialmodex.com`  
**Deployment target:** Hostinger VPS  
**Product status:** Controlled-pilot build  
**Assessment:** ModEX Financial Modelling Bootcamp — Final Certificate Examination

## 1. Product purpose

The portal must validate successful completion of the six-session ModEX Financial Modelling Bootcamp. It is not an attendance quiz and must not imply a regulated professional designation.

The examination proves that a candidate can:

1. Structure a professional financial model.
2. Analyse historical financial statements and ratios.
3. Build a driver-based forecast.
4. Integrate the income statement, balance sheet, and cash flow.
5. Model working capital, PPE, debt, interest, and cash.
6. Build coherent scenarios and sensitivity analysis.
7. Complete DCF and comparable valuation.
8. communicate a decision-ready CFO recommendation.

## 2. Approved examination structure

### Part A — Knowledge and judgement

- 40 questions
- 50 marks
- 90 minutes
- Restricted-resource open-book
- Individual and closed-collaboration
- 30 one-mark application questions
- 10 two-mark case/calculation questions

### Part B — Nour Foods integrated practical case

- 50 marks
- 180 minutes active practical time
- 15-minute controlled upload window
- Deliverables:
  - Completed Excel workbook
  - One-page recommendation PDF
  - Candidate declaration

### Certificate threshold

- Overall score: at least 65/100
- Part A: at least 25/50
- Part B: at least 30/50
- No unresolved critical model deficiency
- No confirmed integrity violation
- Bootcamp commitment requirements satisfied

## 3. Candidate journey

1. Candidate receives an invitation with candidate ID and exam window.
2. Candidate signs in using the approved email.
3. Portal verifies eligibility and assigned case/question version.
4. Candidate reviews the rules and system requirements.
5. Candidate completes a readiness check.
6. Candidate accepts the declaration.
7. Part A starts and the timer is locked server-side.
8. Answers autosave after every change.
9. Part A submits automatically when time expires.
10. Candidate takes the controlled break.
11. Candidate downloads the assigned Nour Foods workbook and case brief.
12. Part B timer starts.
13. Candidate uploads Excel and PDF files during the controlled upload window.
14. Submission receipt is generated.
15. Markers review the practical model using the approved rubric.
16. Borderline and integrity cases go to moderation.
17. Candidate receives the approved result and certificate status.

## 4. Candidate-facing pages

- `/exam` — examination landing page
- `/exam/login` — secure candidate access
- `/exam/readiness` — browser, Excel, file, and identity checks
- `/exam/rules` — full rules and permitted resources
- `/exam/declaration` — independent-work declaration
- `/exam/dashboard` — exam status and assigned windows
- `/exam/part-a` — theory examination shell
- `/exam/break` — controlled break screen
- `/exam/part-b` — practical instructions and secure downloads
- `/exam/upload` — Excel/PDF upload and validation
- `/exam/receipt` — immutable submission receipt
- `/exam/result` — result, moderation status, and certificate decision

## 5. Admin and Board pages

- `/admin/exams` — exam versions and windows
- `/admin/candidates` — eligibility, invitation, attempt, and certificate status
- `/admin/question-bank` — secure question management
- `/admin/blueprints` — session/competency/difficulty allocation
- `/admin/attempts` — live and completed attempts
- `/admin/submissions` — practical workbook/PDF files
- `/admin/marking` — rubric-based marking
- `/admin/moderation` — second marking, appeals, integrity review
- `/admin/certificates` — approved certificate generation
- `/admin/audit` — immutable administrative activity log

## 6. Question-bank controls

Every approved question must store:

- Question ID
- Session 1–6 mapping
- Competency
- Topic
- Learning objective
- Cognitive level
- Difficulty
- Stem
- Four answer choices
- Correct answer
- Correct-answer rationale
- Distractor rationales
- Marks
- Calculation/source reference
- Exam version eligibility
- Security status
- Reviewer
- Approval status
- Revision history
- Pilot statistics

The candidate application must never receive the complete question bank, correct answers, rationales, or inactive questions.

## 7. Approved theory blueprint

| Session | Area | Marks |
|---|---|---:|
| 1 | Modelling mindset, structure, inputs, calculations, outputs, checks | 7 |
| 2 | Historical statements, ratios, cash conversion, statement links | 9 |
| 3 | Forecasting, drivers, working capital, integration | 10 |
| 4 | Cost structure, profitability, scenarios, sensitivity | 8 |
| 5 | DCF, comparables, enterprise and equity value | 10 |
| 6 | Model review, communication, recommendation, ethics | 6 |
| **Total** |  | **50** |

Difficulty target:

- Easy: 20%
- Medium: 55%
- Hard: 25%

Cognitive target:

- Knowledge and understanding: 20%
- Application: 50%
- Interpretation and judgement: 30%

## 8. Practical marking rubric

| Task | Marks |
|---|---:|
| C01 Model structure and discipline | 3 |
| C02 Historical analysis | 4 |
| C03 Forecast assumptions | 4 |
| C04 Revenue and profitability | 7 |
| C05 Working capital | 5 |
| C06 PPE, debt, and interest | 5 |
| C07 Integrated financial statements | 8 |
| C08 Scenarios and sensitivity | 4 |
| C09 Valuation | 5 |
| C10 Dashboard and recommendation | 5 |
| **Total** | **50** |

The same originating error must not be penalised repeatedly. Correct hardcoded outputs receive limited credit because the method is not auditable.

## 9. Security model

- Server-side timers based on database timestamps
- Secure, HTTP-only, same-site session cookies
- Passwordless invitation token or approved identity provider
- Candidate email allow-list
- One active attempt per candidate per part
- CSRF protection
- Rate limiting by candidate, IP, and route
- Question order randomisation within blueprint constraints
- Answer-choice randomisation with stored mapping
- Autosave with sequence number and timestamp
- No correct answers sent to the browser
- Signed download URLs for candidate files
- File-type, file-size, extension, and magic-byte validation
- Virus/malware scan integration before marker access
- SHA-256 hash for every submitted file
- Audit log for sign-in, start, save, submit, upload, mark, moderate, and certify actions
- Formula similarity and metadata are review indicators only, never automatic proof
- Admin roles follow least privilege

## 10. Roles

- Candidate
- Invigilator
- Marker
- Senior Marker / Moderator
- Exam Administrator
- Question Bank Reviewer
- Certificate Approver
- System Administrator
- Board Read-Only Reviewer

## 11. Data model

Core entities:

- User
- CandidateProfile
- Exam
- ExamWindow
- ExamVersion
- Eligibility
- Question
- QuestionRevision
- QuestionChoice
- Blueprint
- BlueprintRule
- Attempt
- AttemptQuestion
- Answer
- AutosaveEvent
- PracticalSubmission
- SubmittedFile
- MarkingAssignment
- PracticalScore
- ModerationCase
- IntegrityCase
- Appeal
- Certificate
- AuditEvent

## 12. Technology architecture

- Next.js 15 App Router
- TypeScript strict mode
- PostgreSQL
- Prisma ORM
- Server-rendered candidate and admin pages
- Minimal client JavaScript
- Object storage for candidate files; local VPS storage is not the preferred long-term design
- Nginx reverse proxy
- TLS certificate for `FMbootcamp.financialmodex.com`
- Docker Compose deployment on Hostinger VPS
- Daily encrypted database backup
- Separate encrypted file backup
- Central error and security logs

## 13. Hostinger VPS deployment

Recommended services:

- `web`: Next.js application
- `db`: PostgreSQL
- `nginx`: TLS termination and reverse proxy
- `backup`: scheduled encrypted backup job

DNS:

- Add an `A` record for `FMbootcamp` pointing to the VPS public IP.
- Do not change the current public domain until the staging build passes security and pilot testing.

## 14. Accessibility and brand

- ModEX navy `#0B2447`
- Secondary navy `#1A2C55`
- Gold `#E7B600`
- Teal `#40A0AD`
- Light background `#F5F7FA`
- WCAG 2.2 AA
- Keyboard-accessible exam controls
- Visible focus states
- High-contrast timer warnings
- English and Arabic support
- True RTL layout for Arabic
- Mobile-readable rules and dashboard
- Part A examination recommended on desktop/laptop
- Part B requires supported desktop Excel

## 15. Release gates

The portal is not live-release approved until:

1. Question bank import is validated.
2. Correct answers and rationales receive independent review.
3. Student and solved workbook versions match the candidate brief.
4. All source assumptions are identical across PDF and Excel.
5. Six-person controlled pilot is completed.
6. Median practical completion is at most 160 minutes.
7. Two-marker variance is no more than three marks.
8. Upload, timeout, resume, and autosave tests pass.
9. Security and permission review passes.
10. Board signs the production release checklist.
