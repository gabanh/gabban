export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      admin_notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message: string
          metadata: Json | null
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          metadata?: Json | null
          title: string
          type: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          metadata?: Json | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      analysis_class_skill_snapshot: {
        Row: {
          avg_percent: number
          green_count: number
          red_count: number
          skill_id: string
          snapshot_id: string
          yellow_count: number
        }
        Insert: {
          avg_percent: number
          green_count?: number
          red_count?: number
          skill_id: string
          snapshot_id: string
          yellow_count?: number
        }
        Update: {
          avg_percent?: number
          green_count?: number
          red_count?: number
          skill_id?: string
          snapshot_id?: string
          yellow_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "analysis_class_skill_snapshot_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "analysis_skills"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_class_skill_snapshot_snapshot_id_fkey"
            columns: ["snapshot_id"]
            isOneToOne: false
            referencedRelation: "analysis_snapshots"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_class_students: {
        Row: {
          class_id: string
          created_at: string
          student_id: string
        }
        Insert: {
          class_id: string
          created_at?: string
          student_id: string
        }
        Update: {
          class_id?: string
          created_at?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_class_students_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "analysis_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_class_students_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_classes: {
        Row: {
          created_at: string
          grade_level: string | null
          id: string
          is_archived: boolean | null
          name: string
          school_year_id: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          grade_level?: string | null
          id?: string
          is_archived?: boolean | null
          name: string
          school_year_id: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          grade_level?: string | null
          id?: string
          is_archived?: boolean | null
          name?: string
          school_year_id?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_classes_school_year_id_fkey"
            columns: ["school_year_id"]
            isOneToOne: false
            referencedRelation: "analysis_school_years"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_criterion_feedback: {
        Row: {
          comment: string
          created_at: string
          criterion_id: string
          exam_id: string
          id: string
          question_id: string
          student_id: string
          updated_at: string
        }
        Insert: {
          comment: string
          created_at?: string
          criterion_id: string
          exam_id: string
          id?: string
          question_id: string
          student_id: string
          updated_at?: string
        }
        Update: {
          comment?: string
          created_at?: string
          criterion_id?: string
          exam_id?: string
          id?: string
          question_id?: string
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_criterion_feedback_criterion_id_fkey"
            columns: ["criterion_id"]
            isOneToOne: false
            referencedRelation: "analysis_question_criteria"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_criterion_feedback_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_criterion_feedback_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "analysis_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_criterion_feedback_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_criterion_scores: {
        Row: {
          created_at: string
          criterion_id: string
          exam_id: string
          id: string
          question_id: string
          rubric_level: number
          student_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          criterion_id: string
          exam_id: string
          id?: string
          question_id: string
          rubric_level: number
          student_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          criterion_id?: string
          exam_id?: string
          id?: string
          question_id?: string
          rubric_level?: number
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_criterion_scores_criterion_id_fkey"
            columns: ["criterion_id"]
            isOneToOne: false
            referencedRelation: "analysis_question_criteria"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_criterion_scores_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_criterion_scores_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "analysis_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_criterion_scores_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_exam_skills: {
        Row: {
          created_at: string
          exam_id: string
          skill_id: string
        }
        Insert: {
          created_at?: string
          exam_id: string
          skill_id: string
        }
        Update: {
          created_at?: string
          exam_id?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_exam_skills_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_exam_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "analysis_skills"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_exams: {
        Row: {
          class_id: string | null
          created_at: string
          description: string | null
          exam_date: string | null
          id: string
          is_archived: boolean | null
          red_threshold: number
          school_year_id: string
          scoring_mode: Database["public"]["Enums"]["analysis_scoring_mode"]
          subject_id: string
          teacher_id: string
          title: string
          total_points: number | null
          updated_at: string
          yellow_threshold: number
        }
        Insert: {
          class_id?: string | null
          created_at?: string
          description?: string | null
          exam_date?: string | null
          id?: string
          is_archived?: boolean | null
          red_threshold?: number
          school_year_id: string
          scoring_mode?: Database["public"]["Enums"]["analysis_scoring_mode"]
          subject_id: string
          teacher_id: string
          title: string
          total_points?: number | null
          updated_at?: string
          yellow_threshold?: number
        }
        Update: {
          class_id?: string | null
          created_at?: string
          description?: string | null
          exam_date?: string | null
          id?: string
          is_archived?: boolean | null
          red_threshold?: number
          school_year_id?: string
          scoring_mode?: Database["public"]["Enums"]["analysis_scoring_mode"]
          subject_id?: string
          teacher_id?: string
          title?: string
          total_points?: number | null
          updated_at?: string
          yellow_threshold?: number
        }
        Relationships: [
          {
            foreignKeyName: "analysis_exams_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "analysis_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_exams_school_year_id_fkey"
            columns: ["school_year_id"]
            isOneToOne: false
            referencedRelation: "analysis_school_years"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_exams_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "analysis_subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_group_members: {
        Row: {
          created_at: string
          group_id: string
          student_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          student_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "analysis_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_group_members_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_groups: {
        Row: {
          class_id: string | null
          color: string | null
          created_at: string
          exam_id: string | null
          id: string
          name: string
          purpose: string | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          class_id?: string | null
          color?: string | null
          created_at?: string
          exam_id?: string | null
          id?: string
          name: string
          purpose?: string | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          class_id?: string | null
          color?: string | null
          created_at?: string
          exam_id?: string | null
          id?: string
          name?: string
          purpose?: string | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_groups_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "analysis_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_groups_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_question_criteria: {
        Row: {
          created_at: string
          id: string
          name: string
          order_index: number
          question_id: string
          weight: number
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          order_index?: number
          question_id: string
          weight?: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          order_index?: number
          question_id?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "analysis_question_criteria_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "analysis_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_question_feedback: {
        Row: {
          comment: string
          created_at: string
          exam_id: string
          id: string
          question_id: string
          student_id: string
          updated_at: string
        }
        Insert: {
          comment: string
          created_at?: string
          exam_id: string
          id?: string
          question_id: string
          student_id: string
          updated_at?: string
        }
        Update: {
          comment?: string
          created_at?: string
          exam_id?: string
          id?: string
          question_id?: string
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_question_feedback_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_question_feedback_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "analysis_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_question_feedback_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_question_skills: {
        Row: {
          question_id: string
          skill_id: string
          weight: number
        }
        Insert: {
          question_id: string
          skill_id: string
          weight?: number
        }
        Update: {
          question_id?: string
          skill_id?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "analysis_question_skills_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "analysis_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_question_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "analysis_skills"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_questions: {
        Row: {
          created_at: string
          exam_id: string
          id: string
          max_points: number
          order_index: number
          q_number: number
          rubric_id: string | null
          rubric_mode: Database["public"]["Enums"]["analysis_rubric_mode"]
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          exam_id: string
          id?: string
          max_points?: number
          order_index?: number
          q_number: number
          rubric_id?: string | null
          rubric_mode?: Database["public"]["Enums"]["analysis_rubric_mode"]
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          exam_id?: string
          id?: string
          max_points?: number
          order_index?: number
          q_number?: number
          rubric_id?: string | null
          rubric_mode?: Database["public"]["Enums"]["analysis_rubric_mode"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_questions_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_questions_rubric_id_fkey"
            columns: ["rubric_id"]
            isOneToOne: false
            referencedRelation: "analysis_rubrics"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_recommendations: {
        Row: {
          created_at: string
          description: string | null
          exam_id: string
          group_id: string | null
          id: string
          priority: Database["public"]["Enums"]["analysis_priority"]
          question_id: string | null
          scope: Database["public"]["Enums"]["analysis_scope"]
          skill_id: string | null
          status: Database["public"]["Enums"]["analysis_status"]
          student_id: string | null
          teacher_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          exam_id: string
          group_id?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["analysis_priority"]
          question_id?: string | null
          scope: Database["public"]["Enums"]["analysis_scope"]
          skill_id?: string | null
          status?: Database["public"]["Enums"]["analysis_status"]
          student_id?: string | null
          teacher_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          exam_id?: string
          group_id?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["analysis_priority"]
          question_id?: string | null
          scope?: Database["public"]["Enums"]["analysis_scope"]
          skill_id?: string | null
          status?: Database["public"]["Enums"]["analysis_status"]
          student_id?: string | null
          teacher_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_recommendations_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_recommendations_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "analysis_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_recommendations_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "analysis_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_recommendations_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "analysis_skills"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_recommendations_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_rubric_levels: {
        Row: {
          created_at: string
          description: string | null
          id: string
          label: string
          level_value: number
          order_index: number
          rubric_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          label: string
          level_value: number
          order_index?: number
          rubric_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          label?: string
          level_value?: number
          order_index?: number
          rubric_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_rubric_levels_rubric_id_fkey"
            columns: ["rubric_id"]
            isOneToOne: false
            referencedRelation: "analysis_rubrics"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_rubrics: {
        Row: {
          created_at: string
          description: string | null
          exam_id: string | null
          id: string
          is_template: boolean | null
          name: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          exam_id?: string | null
          id?: string
          is_template?: boolean | null
          name: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          exam_id?: string | null
          id?: string
          is_template?: boolean | null
          name?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_rubrics_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_school_years: {
        Row: {
          created_at: string
          ends_on: string
          id: string
          is_active: boolean | null
          name: string
          school_name: string | null
          starts_on: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          ends_on: string
          id?: string
          is_active?: boolean | null
          name: string
          school_name?: string | null
          starts_on: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          ends_on?: string
          id?: string
          is_active?: boolean | null
          name?: string
          school_name?: string | null
          starts_on?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      analysis_scores: {
        Row: {
          created_at: string
          exam_id: string
          id: string
          points: number | null
          question_id: string
          rubric_level: number | null
          student_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          exam_id: string
          id?: string
          points?: number | null
          question_id: string
          rubric_level?: number | null
          student_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          exam_id?: string
          id?: string
          points?: number | null
          question_id?: string
          rubric_level?: number | null
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_scores_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_scores_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "analysis_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_scores_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_skills: {
        Row: {
          created_at: string
          description: string | null
          domain: string | null
          id: string
          name: string
          parent_id: string | null
          subject_id: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          domain?: string | null
          id?: string
          name: string
          parent_id?: string | null
          subject_id: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          domain?: string | null
          id?: string
          name?: string
          parent_id?: string | null
          subject_id?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_skills_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "analysis_skills"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_skills_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "analysis_subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_snapshots: {
        Row: {
          computed_at: string
          created_at: string
          exam_id: string
          id: string
          notes: string | null
          subject_id: string
          teacher_id: string
        }
        Insert: {
          computed_at?: string
          created_at?: string
          exam_id: string
          id?: string
          notes?: string | null
          subject_id: string
          teacher_id: string
        }
        Update: {
          computed_at?: string
          created_at?: string
          exam_id?: string
          id?: string
          notes?: string | null
          subject_id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_snapshots_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "analysis_exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_snapshots_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "analysis_subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_student_skill_snapshot: {
        Row: {
          bucket: Database["public"]["Enums"]["analysis_bucket"]
          skill_id: string
          snapshot_id: string
          student_id: string
          value_percent: number
        }
        Insert: {
          bucket: Database["public"]["Enums"]["analysis_bucket"]
          skill_id: string
          snapshot_id: string
          student_id: string
          value_percent: number
        }
        Update: {
          bucket?: Database["public"]["Enums"]["analysis_bucket"]
          skill_id?: string
          snapshot_id?: string
          student_id?: string
          value_percent?: number
        }
        Relationships: [
          {
            foreignKeyName: "analysis_student_skill_snapshot_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "analysis_skills"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_student_skill_snapshot_snapshot_id_fkey"
            columns: ["snapshot_id"]
            isOneToOne: false
            referencedRelation: "analysis_snapshots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_student_skill_snapshot_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "analysis_students"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_students: {
        Row: {
          created_at: string
          full_name: string
          id: string
          is_archived: boolean | null
          notes: string | null
          student_number: string | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          full_name: string
          id?: string
          is_archived?: boolean | null
          notes?: string | null
          student_number?: string | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          is_archived?: boolean | null
          notes?: string | null
          student_number?: string | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      analysis_subjects: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      answer_rubric_evaluations: {
        Row: {
          accuracy_score: number
          ai_feedback: string | null
          answer_id: string
          coherence_score: number
          created_at: string
          evidence_score: number
          id: string
          org_id: string | null
          teacher_adjusted: boolean | null
          total_rubric_score: number | null
          understanding_score: number
          updated_at: string
        }
        Insert: {
          accuracy_score?: number
          ai_feedback?: string | null
          answer_id: string
          coherence_score?: number
          created_at?: string
          evidence_score?: number
          id?: string
          org_id?: string | null
          teacher_adjusted?: boolean | null
          total_rubric_score?: number | null
          understanding_score?: number
          updated_at?: string
        }
        Update: {
          accuracy_score?: number
          ai_feedback?: string | null
          answer_id?: string
          coherence_score?: number
          created_at?: string
          evidence_score?: number
          id?: string
          org_id?: string | null
          teacher_adjusted?: boolean | null
          total_rubric_score?: number | null
          understanding_score?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "answer_rubric_evaluations_answer_id_fkey"
            columns: ["answer_id"]
            isOneToOne: true
            referencedRelation: "answers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answer_rubric_evaluations_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      answers: {
        Row: {
          answer_value: Json | null
          created_at: string
          id: string
          is_correct: boolean | null
          org_id: string | null
          points_awarded: number | null
          question_id: string
          student_annotations: Json | null
          submission_id: string
          teacher_comment: string | null
          updated_at: string
        }
        Insert: {
          answer_value?: Json | null
          created_at?: string
          id?: string
          is_correct?: boolean | null
          org_id?: string | null
          points_awarded?: number | null
          question_id: string
          student_annotations?: Json | null
          submission_id: string
          teacher_comment?: string | null
          updated_at?: string
        }
        Update: {
          answer_value?: Json | null
          created_at?: string
          id?: string
          is_correct?: boolean | null
          org_id?: string | null
          points_awarded?: number | null
          question_id?: string
          student_annotations?: Json | null
          submission_id?: string
          teacher_comment?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "answers_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answers_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      attempt_resets: {
        Row: {
          created_at: string
          deleted_submissions_count: number
          exam_id: string
          id: string
          org_id: string | null
          reason: string | null
          student_id: string
          teacher_id: string
        }
        Insert: {
          created_at?: string
          deleted_submissions_count?: number
          exam_id: string
          id?: string
          org_id?: string | null
          reason?: string | null
          student_id: string
          teacher_id: string
        }
        Update: {
          created_at?: string
          deleted_submissions_count?: number
          exam_id?: string
          id?: string
          org_id?: string | null
          reason?: string | null
          student_id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "attempt_resets_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attempt_resets_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: string
          material_id: string | null
          name_ar: string
          org_id: string | null
          parent_id: string | null
          subject_id: string | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          material_id?: string | null
          name_ar: string
          org_id?: string | null
          parent_id?: string | null
          subject_id?: string | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          material_id?: string | null
          name_ar?: string
          org_id?: string | null
          parent_id?: string | null
          subject_id?: string | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      curriculum_question_bank: {
        Row: {
          correct_answer: Json | null
          created_at: string
          difficulty: string
          id: string
          options: Json | null
          org_id: string | null
          points: number | null
          question_text: string
          skill_focus: string | null
          teacher_id: string
          text_id: string
          type: string
          updated_at: string
        }
        Insert: {
          correct_answer?: Json | null
          created_at?: string
          difficulty: string
          id?: string
          options?: Json | null
          org_id?: string | null
          points?: number | null
          question_text: string
          skill_focus?: string | null
          teacher_id: string
          text_id: string
          type: string
          updated_at?: string
        }
        Update: {
          correct_answer?: Json | null
          created_at?: string
          difficulty?: string
          id?: string
          options?: Json | null
          org_id?: string | null
          points?: number | null
          question_text?: string
          skill_focus?: string | null
          teacher_id?: string
          text_id?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_question_bank_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_question_bank_text_id_fkey"
            columns: ["text_id"]
            isOneToOne: false
            referencedRelation: "curriculum_text_bank"
            referencedColumns: ["id"]
          },
        ]
      }
      curriculum_text_bank: {
        Row: {
          content: string
          created_at: string
          curriculum_code: string | null
          difficulty: string
          grade_level: string
          id: string
          images: Json | null
          is_public: boolean | null
          language: string | null
          org_id: string | null
          skill_focus: string
          tags: Json | null
          teacher_id: string
          title: string
          updated_at: string
          word_count: number | null
        }
        Insert: {
          content: string
          created_at?: string
          curriculum_code?: string | null
          difficulty: string
          grade_level: string
          id?: string
          images?: Json | null
          is_public?: boolean | null
          language?: string | null
          org_id?: string | null
          skill_focus: string
          tags?: Json | null
          teacher_id: string
          title: string
          updated_at?: string
          word_count?: number | null
        }
        Update: {
          content?: string
          created_at?: string
          curriculum_code?: string | null
          difficulty?: string
          grade_level?: string
          id?: string
          images?: Json | null
          is_public?: boolean | null
          language?: string | null
          org_id?: string | null
          skill_focus?: string
          tags?: Json | null
          teacher_id?: string
          title?: string
          updated_at?: string
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_text_bank_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      enrollment_identities: {
        Row: {
          created_at: string
          enrollment_id: string
          exam_id: string
          national_id_hash: string
        }
        Insert: {
          created_at?: string
          enrollment_id: string
          exam_id: string
          national_id_hash: string
        }
        Update: {
          created_at?: string
          enrollment_id?: string
          exam_id?: string
          national_id_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollment_identities_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: true
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollment_identities_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
        ]
      }
      enrollments: {
        Row: {
          enrolled_at: string
          exam_id: string
          id: string
          org_id: string | null
          student_id: string
          student_name: string
        }
        Insert: {
          enrolled_at?: string
          exam_id: string
          id?: string
          org_id?: string | null
          student_id: string
          student_name: string
        }
        Update: {
          enrolled_at?: string
          exam_id?: string
          id?: string
          org_id?: string | null
          student_id?: string
          student_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_error_analysis: {
        Row: {
          common_wrong_answer: string | null
          common_wrong_percentage: number | null
          correct_responses: number | null
          created_at: string
          evidence_errors: number | null
          exam_id: string
          id: string
          inference_errors: number | null
          main_idea_errors: number | null
          org_id: string | null
          partial_comprehension: number | null
          question_id: string
          summary_text: string | null
          total_responses: number | null
          updated_at: string
          vocabulary_errors: number | null
        }
        Insert: {
          common_wrong_answer?: string | null
          common_wrong_percentage?: number | null
          correct_responses?: number | null
          created_at?: string
          evidence_errors?: number | null
          exam_id: string
          id?: string
          inference_errors?: number | null
          main_idea_errors?: number | null
          org_id?: string | null
          partial_comprehension?: number | null
          question_id: string
          summary_text?: string | null
          total_responses?: number | null
          updated_at?: string
          vocabulary_errors?: number | null
        }
        Update: {
          common_wrong_answer?: string | null
          common_wrong_percentage?: number | null
          correct_responses?: number | null
          created_at?: string
          evidence_errors?: number | null
          exam_id?: string
          id?: string
          inference_errors?: number | null
          main_idea_errors?: number | null
          org_id?: string | null
          partial_comprehension?: number | null
          question_id?: string
          summary_text?: string | null
          total_responses?: number | null
          updated_at?: string
          vocabulary_errors?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "exam_error_analysis_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exam_error_analysis_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exam_error_analysis_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_questions: {
        Row: {
          correct_answer_snapshot: Json | null
          exam_id: string
          id: string
          is_frozen: boolean
          options_snapshot: Json | null
          order_index: number
          overrides: Json | null
          passage_snapshot: Json | null
          question_id: string
          question_text_snapshot: string | null
          score: number | null
          type_snapshot: string | null
        }
        Insert: {
          correct_answer_snapshot?: Json | null
          exam_id: string
          id?: string
          is_frozen?: boolean
          options_snapshot?: Json | null
          order_index?: number
          overrides?: Json | null
          passage_snapshot?: Json | null
          question_id: string
          question_text_snapshot?: string | null
          score?: number | null
          type_snapshot?: string | null
        }
        Update: {
          correct_answer_snapshot?: Json | null
          exam_id?: string
          id?: string
          is_frozen?: boolean
          options_snapshot?: Json | null
          order_index?: number
          overrides?: Json | null
          passage_snapshot?: Json | null
          question_id?: string
          question_text_snapshot?: string | null
          score?: number | null
          type_snapshot?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exam_questions_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exam_questions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_templates: {
        Row: {
          attempts_allowed: number
          created_at: string
          description: string | null
          duration_minutes: number
          grade_level: string | null
          id: string
          is_public: boolean
          name: string
          org_id: string | null
          question_structure: Json
          show_result_mode: string
          shuffle_options: boolean
          shuffle_questions: boolean
          subject: string | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          attempts_allowed?: number
          created_at?: string
          description?: string | null
          duration_minutes?: number
          grade_level?: string | null
          id?: string
          is_public?: boolean
          name: string
          org_id?: string | null
          question_structure?: Json
          show_result_mode?: string
          shuffle_options?: boolean
          shuffle_questions?: boolean
          subject?: string | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          attempts_allowed?: number
          created_at?: string
          description?: string | null
          duration_minutes?: number
          grade_level?: string | null
          id?: string
          is_public?: boolean
          name?: string
          org_id?: string | null
          question_structure?: Json
          show_result_mode?: string
          shuffle_options?: boolean
          shuffle_questions?: boolean
          subject?: string | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "exam_templates_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_versions: {
        Row: {
          archived_at: string | null
          created_at: string
          exam_id: string
          id: string
          org_id: string
          published_at: string | null
          reopen_until: string | null
          reopen_window_hours: number | null
          status: Database["public"]["Enums"]["exam_version_status"]
          updated_at: string
          version_number: number
        }
        Insert: {
          archived_at?: string | null
          created_at?: string
          exam_id: string
          id?: string
          org_id: string
          published_at?: string | null
          reopen_until?: string | null
          reopen_window_hours?: number | null
          status?: Database["public"]["Enums"]["exam_version_status"]
          updated_at?: string
          version_number?: number
        }
        Update: {
          archived_at?: string | null
          created_at?: string
          exam_id?: string
          id?: string
          org_id?: string
          published_at?: string | null
          reopen_until?: string | null
          reopen_window_hours?: number | null
          status?: Database["public"]["Enums"]["exam_version_status"]
          updated_at?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "exam_versions_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
        ]
      }
      exams: {
        Row: {
          attempts_allowed: number
          close_at: string | null
          created_at: string
          description: string | null
          duration_minutes: number
          id: string
          is_interactive: boolean
          is_published: boolean
          join_code: string | null
          open_at: string | null
          org_id: string | null
          show_result_mode: Database["public"]["Enums"]["result_mode"]
          shuffle_options: boolean
          shuffle_questions: boolean
          teacher_id: string
          title: string
          updated_at: string
        }
        Insert: {
          attempts_allowed?: number
          close_at?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          is_interactive?: boolean
          is_published?: boolean
          join_code?: string | null
          open_at?: string | null
          org_id?: string | null
          show_result_mode?: Database["public"]["Enums"]["result_mode"]
          shuffle_options?: boolean
          shuffle_questions?: boolean
          teacher_id: string
          title: string
          updated_at?: string
        }
        Update: {
          attempts_allowed?: number
          close_at?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          is_interactive?: boolean
          is_published?: boolean
          join_code?: string | null
          open_at?: string | null
          org_id?: string | null
          show_result_mode?: Database["public"]["Enums"]["result_mode"]
          shuffle_options?: boolean
          shuffle_questions?: boolean
          teacher_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "exams_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      interactive_answers: {
        Row: {
          answer_value: Json | null
          created_at: string
          field_id: string
          id: string
          is_correct: boolean | null
          points_awarded: number | null
          submission_id: string
          updated_at: string
        }
        Insert: {
          answer_value?: Json | null
          created_at?: string
          field_id: string
          id?: string
          is_correct?: boolean | null
          points_awarded?: number | null
          submission_id: string
          updated_at?: string
        }
        Update: {
          answer_value?: Json | null
          created_at?: string
          field_id?: string
          id?: string
          is_correct?: boolean | null
          points_awarded?: number | null
          submission_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "interactive_answers_field_id_fkey"
            columns: ["field_id"]
            isOneToOne: false
            referencedRelation: "interactive_fields"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactive_answers_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      interactive_documents: {
        Row: {
          created_at: string
          exam_id: string | null
          file_type: string
          file_url: string
          id: string
          org_id: string | null
          page_count: number
          teacher_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          exam_id?: string | null
          file_type: string
          file_url: string
          id?: string
          org_id?: string | null
          page_count?: number
          teacher_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          exam_id?: string | null
          file_type?: string
          file_url?: string
          id?: string
          org_id?: string | null
          page_count?: number
          teacher_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "interactive_documents_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactive_documents_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      interactive_fields: {
        Row: {
          correct_answer: Json
          created_at: string
          document_id: string
          field_type: string
          height: number
          id: string
          is_required: boolean
          label: string | null
          options: Json | null
          order_index: number
          page_id: string
          points: number
          updated_at: string
          width: number
          x: number
          y: number
        }
        Insert: {
          correct_answer: Json
          created_at?: string
          document_id: string
          field_type: string
          height: number
          id?: string
          is_required?: boolean
          label?: string | null
          options?: Json | null
          order_index?: number
          page_id: string
          points?: number
          updated_at?: string
          width: number
          x: number
          y: number
        }
        Update: {
          correct_answer?: Json
          created_at?: string
          document_id?: string
          field_type?: string
          height?: number
          id?: string
          is_required?: boolean
          label?: string | null
          options?: Json | null
          order_index?: number
          page_id?: string
          points?: number
          updated_at?: string
          width?: number
          x?: number
          y?: number
        }
        Relationships: [
          {
            foreignKeyName: "interactive_fields_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "interactive_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactive_fields_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "interactive_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      interactive_pages: {
        Row: {
          created_at: string
          document_id: string
          height: number
          id: string
          image_url: string
          page_number: number
          width: number
        }
        Insert: {
          created_at?: string
          document_id: string
          height?: number
          id?: string
          image_url: string
          page_number: number
          width?: number
        }
        Update: {
          created_at?: string
          document_id?: string
          height?: number
          id?: string
          image_url?: string
          page_number?: number
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "interactive_pages_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "interactive_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      materials: {
        Row: {
          created_at: string
          extracted_text: string | null
          extraction_json: Json | null
          file_url: string | null
          id: string
          org_id: string | null
          source_type: string
          subject_type: string | null
          teacher_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          extracted_text?: string | null
          extraction_json?: Json | null
          file_url?: string | null
          id?: string
          org_id?: string | null
          source_type: string
          subject_type?: string | null
          teacher_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          extracted_text?: string | null
          extraction_json?: Json | null
          file_url?: string | null
          id?: string
          org_id?: string | null
          source_type?: string
          subject_type?: string | null
          teacher_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "materials_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      memberships: {
        Row: {
          created_at: string
          id: string
          org_id: string
          role: Database["public"]["Enums"]["org_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          org_id: string
          role?: Database["public"]["Enums"]["org_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          org_id?: string
          role?: Database["public"]["Enums"]["org_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "memberships_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_logs: {
        Row: {
          created_at: string
          error_message: string | null
          exam_id: string
          id: string
          notification_type: string
          org_id: string | null
          sent_at: string | null
          status: string
          student_email: string
          student_id: string
          student_name: string | null
          submission_id: string | null
          teacher_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          exam_id: string
          id?: string
          notification_type?: string
          org_id?: string | null
          sent_at?: string | null
          status?: string
          student_email: string
          student_id: string
          student_name?: string | null
          submission_id?: string | null
          teacher_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          exam_id?: string
          id?: string
          notification_type?: string
          org_id?: string | null
          sent_at?: string | null
          status?: string
          student_email?: string
          student_id?: string
          student_name?: string | null
          submission_id?: string | null
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_logs_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_logs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_logs_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      org_settings: {
        Row: {
          allow_student_choose_version: Database["public"]["Enums"]["version_choice_policy"]
          auto_lock_previous_on_publish: boolean
          continuation_grace_days: number
          created_at: string
          id: string
          org_id: string
          reopen_max_hours: number
          reopen_permission: Database["public"]["Enums"]["reopen_permission"]
          updated_at: string
        }
        Insert: {
          allow_student_choose_version?: Database["public"]["Enums"]["version_choice_policy"]
          auto_lock_previous_on_publish?: boolean
          continuation_grace_days?: number
          created_at?: string
          id?: string
          org_id: string
          reopen_max_hours?: number
          reopen_permission?: Database["public"]["Enums"]["reopen_permission"]
          updated_at?: string
        }
        Update: {
          allow_student_choose_version?: Database["public"]["Enums"]["version_choice_policy"]
          auto_lock_previous_on_publish?: boolean
          continuation_grace_days?: number
          created_at?: string
          id?: string
          org_id?: string
          reopen_max_hours?: number
          reopen_permission?: Database["public"]["Enums"]["reopen_permission"]
          updated_at?: string
        }
        Relationships: []
      }
      organizations: {
        Row: {
          created_at: string
          id: string
          invite_code: string | null
          name: string
          org_number: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          invite_code?: string | null
          name: string
          org_number?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          invite_code?: string | null
          name?: string
          org_number?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      passages: {
        Row: {
          content: string
          created_at: string
          id: string
          images: Json | null
          org_id: string | null
          teacher_id: string
          title: string | null
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          images?: Json | null
          org_id?: string | null
          teacher_id: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          images?: Json | null
          org_id?: string | null
          teacher_id?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "passages_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      pdf_reports: {
        Row: {
          created_at: string | null
          exam_id: string
          id: string
          public_url: string
          report_type: string
          storage_path: string
          submission_id: string | null
          teacher_id: string
        }
        Insert: {
          created_at?: string | null
          exam_id: string
          id?: string
          public_url: string
          report_type: string
          storage_path: string
          submission_id?: string | null
          teacher_id: string
        }
        Update: {
          created_at?: string | null
          exam_id?: string
          id?: string
          public_url?: string
          report_type?: string
          storage_path?: string
          submission_id?: string | null
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdf_reports_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pdf_reports_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          email_verified: boolean | null
          full_name: string
          id: string
          national_id_hash: string | null
          updated_at: string
          welcome_email_error: string | null
          welcome_email_sent: boolean | null
          welcome_email_sent_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          email_verified?: boolean | null
          full_name: string
          id: string
          national_id_hash?: string | null
          updated_at?: string
          welcome_email_error?: string | null
          welcome_email_sent?: boolean | null
          welcome_email_sent_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          email_verified?: boolean | null
          full_name?: string
          id?: string
          national_id_hash?: string | null
          updated_at?: string
          welcome_email_error?: string | null
          welcome_email_sent?: boolean | null
          welcome_email_sent_at?: string | null
        }
        Relationships: []
      }
      question_bank: {
        Row: {
          answer_key: string | null
          created_at: string
          difficulty: Database["public"]["Enums"]["difficulty_level"] | null
          grade: string | null
          id: string
          options: Json | null
          org_id: string | null
          points: number | null
          prompt: string
          subject: string | null
          teacher_id: string
          type: Database["public"]["Enums"]["question_type"]
          updated_at: string
        }
        Insert: {
          answer_key?: string | null
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty_level"] | null
          grade?: string | null
          id?: string
          options?: Json | null
          org_id?: string | null
          points?: number | null
          prompt: string
          subject?: string | null
          teacher_id: string
          type: Database["public"]["Enums"]["question_type"]
          updated_at?: string
        }
        Update: {
          answer_key?: string | null
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty_level"] | null
          grade?: string | null
          id?: string
          options?: Json | null
          org_id?: string | null
          points?: number | null
          prompt?: string
          subject?: string | null
          teacher_id?: string
          type?: Database["public"]["Enums"]["question_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_bank_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          bloom_level: string | null
          category_id: string | null
          correct_answer: Json | null
          created_at: string
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          figures: Json | null
          id: string
          material_id: string | null
          options: Json | null
          org_id: string | null
          passage_id: string | null
          points: number
          question_text: string
          tags: Json | null
          teacher_annotations: Json | null
          teacher_id: string
          topic: string | null
          type: Database["public"]["Enums"]["question_type"]
          unit: string | null
          updated_at: string
        }
        Insert: {
          bloom_level?: string | null
          category_id?: string | null
          correct_answer?: Json | null
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          figures?: Json | null
          id?: string
          material_id?: string | null
          options?: Json | null
          org_id?: string | null
          passage_id?: string | null
          points?: number
          question_text: string
          tags?: Json | null
          teacher_annotations?: Json | null
          teacher_id: string
          topic?: string | null
          type: Database["public"]["Enums"]["question_type"]
          unit?: string | null
          updated_at?: string
        }
        Update: {
          bloom_level?: string | null
          category_id?: string | null
          correct_answer?: Json | null
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          figures?: Json | null
          id?: string
          material_id?: string | null
          options?: Json | null
          org_id?: string | null
          passage_id?: string | null
          points?: number
          question_text?: string
          tags?: Json | null
          teacher_annotations?: Json | null
          teacher_id?: string
          topic?: string | null
          type?: Database["public"]["Enums"]["question_type"]
          unit?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "questions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "questions_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "questions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "questions_passage_id_fkey"
            columns: ["passage_id"]
            isOneToOne: false
            referencedRelation: "passages"
            referencedColumns: ["id"]
          },
        ]
      }
      site_news: {
        Row: {
          created_at: string
          created_by: string | null
          icon_name: string
          id: string
          is_active: boolean
          order_index: number
          text_ar: string
          text_en: string | null
          text_he: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          icon_name?: string
          id?: string
          is_active?: boolean
          order_index?: number
          text_ar: string
          text_en?: string | null
          text_he?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          icon_name?: string
          id?: string
          is_active?: boolean
          order_index?: number
          text_ar?: string
          text_en?: string | null
          text_he?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      submissions: {
        Row: {
          auto_score: number | null
          created_at: string
          exam_id: string
          id: string
          manual_score: number | null
          org_id: string | null
          pdf_error: string | null
          pdf_report_id: string | null
          pdf_status: string
          started_at: string
          status: Database["public"]["Enums"]["submission_status"]
          student_id: string
          student_id_number: string | null
          student_name: string | null
          submitted_at: string | null
          total_score: number | null
        }
        Insert: {
          auto_score?: number | null
          created_at?: string
          exam_id: string
          id?: string
          manual_score?: number | null
          org_id?: string | null
          pdf_error?: string | null
          pdf_report_id?: string | null
          pdf_status?: string
          started_at?: string
          status?: Database["public"]["Enums"]["submission_status"]
          student_id: string
          student_id_number?: string | null
          student_name?: string | null
          submitted_at?: string | null
          total_score?: number | null
        }
        Update: {
          auto_score?: number | null
          created_at?: string
          exam_id?: string
          id?: string
          manual_score?: number | null
          org_id?: string | null
          pdf_error?: string | null
          pdf_report_id?: string | null
          pdf_status?: string
          started_at?: string
          status?: Database["public"]["Enums"]["submission_status"]
          student_id?: string
          student_id_number?: string | null
          student_name?: string | null
          submitted_at?: string | null
          total_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "submissions_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_pdf_report_id_fkey"
            columns: ["pdf_report_id"]
            isOneToOne: false
            referencedRelation: "pdf_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message: string
          metadata: Json | null
          org_id: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          metadata?: Json | null
          org_id?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          metadata?: Json | null
          org_id?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_notifications_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      version_audit_logs: {
        Row: {
          action: string
          actor_id: string
          created_at: string
          exam_id: string
          id: string
          new_status: Database["public"]["Enums"]["exam_version_status"] | null
          org_id: string
          previous_status:
            | Database["public"]["Enums"]["exam_version_status"]
            | null
          reason: string | null
          reopen_until: string | null
          version_id: string
        }
        Insert: {
          action: string
          actor_id: string
          created_at?: string
          exam_id: string
          id?: string
          new_status?: Database["public"]["Enums"]["exam_version_status"] | null
          org_id: string
          previous_status?:
            | Database["public"]["Enums"]["exam_version_status"]
            | null
          reason?: string | null
          reopen_until?: string | null
          version_id: string
        }
        Update: {
          action?: string
          actor_id?: string
          created_at?: string
          exam_id?: string
          id?: string
          new_status?: Database["public"]["Enums"]["exam_version_status"] | null
          org_id?: string
          previous_status?:
            | Database["public"]["Enums"]["exam_version_status"]
            | null
          reason?: string | null
          reopen_until?: string | null
          version_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "version_audit_logs_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "version_audit_logs_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "exam_versions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      profiles_safe: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          email_verified: boolean | null
          full_name: string | null
          id: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          email_verified?: boolean | null
          full_name?: string | null
          id?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          email_verified?: boolean | null
          full_name?: string | null
          id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      archive_exam_version: {
        Args: {
          p_archive_type: Database["public"]["Enums"]["exam_version_status"]
          p_reason?: string
          p_version_id: string
        }
        Returns: boolean
      }
      create_admin_notification: {
        Args: {
          p_message: string
          p_metadata?: Json
          p_title: string
          p_type: string
        }
        Returns: string
      }
      create_organization_with_admin: {
        Args: { p_name: string; p_org_number?: string; p_slug: string }
        Returns: {
          created_at: string
          id: string
          invite_code: string | null
          name: string
          org_number: string | null
          slug: string
          updated_at: string
        }
        SetofOptions: {
          from: "*"
          to: "organizations"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      enroll_in_exam: {
        Args: {
          p_exam_code: string
          p_national_id: string
          p_student_name: string
        }
        Returns: string
      }
      ensure_user_has_org: {
        Args: { _org_name?: string; _user_id: string }
        Returns: string
      }
      generate_join_code: { Args: never; Returns: string }
      generate_org_invite_code: { Args: never; Returns: string }
      get_exam_questions_for_student: {
        Args: { p_exam_id: string; p_submission_id: string }
        Returns: {
          exam_question_id: string
          options: Json
          order_index: number
          passage_snapshot: Json
          points: number
          question_id: string
          question_text: string
          type: Database["public"]["Enums"]["question_type"]
        }[]
      }
      get_exam_total_points: { Args: { p_exam_id: string }; Returns: number }
      get_user_active_orgs: { Args: { _user_id: string }; Returns: string[] }
      get_user_org_id: { Args: never; Returns: string }
      get_version_statistics: {
        Args: { p_exam_id?: string }
        Returns: {
          avg_score: number
          exam_id: string
          graded_count: number
          in_progress_count: number
          org_id: string
          status: Database["public"]["Enums"]["exam_version_status"]
          submitted_count: number
          total_attempts: number
          total_students: number
          version_id: string
          version_number: number
        }[]
      }
      has_org_role: {
        Args: {
          _org_id: string
          _role: Database["public"]["Enums"]["org_role"]
          _user_id: string
        }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      hash_national_id: { Args: { national_id: string }; Returns: string }
      is_app_admin: { Args: { _user_id: string }; Returns: boolean }
      is_email_verified: { Args: { _user_id: string }; Returns: boolean }
      is_enrolled_in_exam: {
        Args: { _exam_id: string; _user_id: string }
        Returns: boolean
      }
      is_exam_available_for_enrollment: {
        Args: { _exam_id: string }
        Returns: boolean
      }
      is_org_member: {
        Args: { _org_id: string; _user_id: string }
        Returns: boolean
      }
      is_recently_created_org: { Args: { _org_id: string }; Returns: boolean }
      join_organization_by_code: {
        Args: { p_invite_code: string }
        Returns: string
      }
      log_version_action: {
        Args: {
          p_action: string
          p_exam_id: string
          p_new_status: Database["public"]["Enums"]["exam_version_status"]
          p_org_id: string
          p_previous_status: Database["public"]["Enums"]["exam_version_status"]
          p_reason?: string
          p_reopen_until?: string
          p_version_id: string
        }
        Returns: string
      }
      register_student_profile: {
        Args: {
          p_email: string
          p_full_name: string
          p_national_id: string
          p_user_id: string
        }
        Returns: boolean
      }
      reopen_exam_version: {
        Args: { p_reason?: string; p_version_id: string }
        Returns: boolean
      }
      save_exam_answers: {
        Args: { p_answers: Json; p_submission_id: string }
        Returns: undefined
      }
      submit_exam_answers: {
        Args: { p_answers: Json; p_auto_score: number; p_submission_id: string }
        Returns: undefined
      }
      validate_israeli_id: { Args: { id_number: string }; Returns: boolean }
    }
    Enums: {
      analysis_bucket: "red" | "yellow" | "green"
      analysis_priority: "high" | "medium" | "low"
      analysis_rubric_mode: "single" | "criteria"
      analysis_scope:
        | "student_skill"
        | "skill_class"
        | "question_class"
        | "group"
      analysis_scoring_mode: "points" | "rubric" | "hybrid"
      analysis_status: "pending" | "in_progress" | "completed" | "dismissed"
      app_role: "admin" | "teacher" | "student"
      difficulty_level: "easy" | "medium" | "hard"
      exam_version_status:
        | "published"
        | "archived_for_new_students"
        | "archived"
      org_role: "org_admin" | "teacher" | "student"
      question_type:
        | "multiple_choice"
        | "true_false"
        | "fill_blank"
        | "short_answer"
        | "essay"
      reopen_permission: "org_admin_only" | "teacher_and_org_admin"
      result_mode: "immediate" | "manual" | "never"
      submission_status: "in_progress" | "submitted" | "graded"
      version_choice_policy: "always" | "only_if_not_started" | "never"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      analysis_bucket: ["red", "yellow", "green"],
      analysis_priority: ["high", "medium", "low"],
      analysis_rubric_mode: ["single", "criteria"],
      analysis_scope: [
        "student_skill",
        "skill_class",
        "question_class",
        "group",
      ],
      analysis_scoring_mode: ["points", "rubric", "hybrid"],
      analysis_status: ["pending", "in_progress", "completed", "dismissed"],
      app_role: ["admin", "teacher", "student"],
      difficulty_level: ["easy", "medium", "hard"],
      exam_version_status: [
        "published",
        "archived_for_new_students",
        "archived",
      ],
      org_role: ["org_admin", "teacher", "student"],
      question_type: [
        "multiple_choice",
        "true_false",
        "fill_blank",
        "short_answer",
        "essay",
      ],
      reopen_permission: ["org_admin_only", "teacher_and_org_admin"],
      result_mode: ["immediate", "manual", "never"],
      submission_status: ["in_progress", "submitted", "graded"],
      version_choice_policy: ["always", "only_if_not_started", "never"],
    },
  },
} as const
