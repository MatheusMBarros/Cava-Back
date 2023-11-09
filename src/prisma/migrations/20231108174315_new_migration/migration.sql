-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sector" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "Mold" (
    "mold_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "total_weight" DOUBLE PRECISION NOT NULL,
    "channel_return_weight" DOUBLE PRECISION NOT NULL,
    "channel_lost_percentage" DOUBLE PRECISION NOT NULL,
    "mold_aluminium_loss" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Mold_pkey" PRIMARY KEY ("mold_id")
);

-- CreateTable
CREATE TABLE "Piece" (
    "piece_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "gross_weight" DOUBLE PRECISION NOT NULL,
    "net_weight" DOUBLE PRECISION NOT NULL,
    "handle_type" TEXT NOT NULL,
    "splinter_lost_percentage" DOUBLE PRECISION NOT NULL,
    "splinter" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("piece_id")
);

-- CreateTable
CREATE TABLE "Mold_Piece" (
    "mold_piece_id" SERIAL NOT NULL,
    "mold_fk" INTEGER NOT NULL,
    "piece_fk" INTEGER NOT NULL,
    "cavity" INTEGER NOT NULL,

    CONSTRAINT "Mold_Piece_pkey" PRIMARY KEY ("mold_piece_id")
);

-- CreateTable
CREATE TABLE "Production_Order" (
    "production_order_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "finished_at" TIMESTAMP(3),
    "initial_counter" INTEGER NOT NULL,
    "final_counter" INTEGER,
    "employee_fk" INTEGER NOT NULL,
    "mold_quantity" INTEGER NOT NULL,
    "mold_fk" INTEGER NOT NULL,
    "description" VARCHAR(300),

    CONSTRAINT "Production_Order_pkey" PRIMARY KEY ("production_order_id")
);

-- AddForeignKey
ALTER TABLE "Mold_Piece" ADD CONSTRAINT "Mold_Piece_mold_fk_fkey" FOREIGN KEY ("mold_fk") REFERENCES "Mold"("mold_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mold_Piece" ADD CONSTRAINT "Mold_Piece_piece_fk_fkey" FOREIGN KEY ("piece_fk") REFERENCES "Piece"("piece_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production_Order" ADD CONSTRAINT "Production_Order_employee_fk_fkey" FOREIGN KEY ("employee_fk") REFERENCES "Employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production_Order" ADD CONSTRAINT "Production_Order_mold_fk_fkey" FOREIGN KEY ("mold_fk") REFERENCES "Mold"("mold_id") ON DELETE RESTRICT ON UPDATE CASCADE;
